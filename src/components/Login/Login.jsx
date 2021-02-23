import React from 'react'
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return(
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login;

const LoginForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit}
      //e.prevent.default
      // get all form data and put them to object
        // props.onSubmit(formData)
        >
        <div>
          <Field type="text" placeholder={'Login'} name={'login'} component={'input'}/>
        </div>
        <div>
          <Field type="text" placeholder={'password'} name={'password'} component={'input'}/>
        </div>
        <div>
          <Field component={'input'} name={'rememberMe'} type="checkbox"/> Remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)
