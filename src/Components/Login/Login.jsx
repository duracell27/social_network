import React from 'react';
import cls from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const Login = () => {
    const onSubmit = (formData) => {
            debugger
    }
    return (
        <div className={cls.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
    
}

const LoginForm = (props) => {
    debugger
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
                </div>
                <div>
                    <button>Log In</button>
                </div>
            </form>
    )
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default Login;