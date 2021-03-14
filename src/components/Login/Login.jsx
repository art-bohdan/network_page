import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../helpers/validators/validators';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/authReducer';
import { Redirect } from 'react-router';
import classes from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', [required], 'email', Input, { type: 'email' })}
      {createField('password', [required], 'password', Input, {
        type: 'password',
      })}
      {createField(
        null,
        [],
        'rememberMe',
        Input,
        { type: 'checkbox' },
        'Remember me'
      )}
      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if(props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login);



const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);
