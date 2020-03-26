import React from 'react';
import cls from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

let maxLength = maxLengthCreator(30);

const Login = () => {
    const onSubmit = (formData) => {
    }
    return (
        <div className={cls.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
    
}

const LoginForm = (props) => {

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={Input} validate={[requiredField, maxLength]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={Input} validate={[requiredField, maxLength]}/>
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