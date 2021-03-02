import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../helpers/validators/validators';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/authReducer';
import {Redirect} from "react-router";
import classes from '../common/FormsControls/FormsControls.module.css'

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

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type='email'
          placeholder={'Email'}
          validate={[required]}
          name={'email'}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={'password'}
          validate={[required]}
          name={'password'}
          component={Input}
          type={'password'}
        />
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type='checkbox' /> Remember
        me
      </div>
      {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);
