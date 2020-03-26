import React from 'react';
import cls from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";

let maxLength = maxLengthCreator(30);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) return <Redirect to={'/profile'} />

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
                    <Field placeholder={'Email'} name={'email'} component={Input} validate={[requiredField, maxLength]}/>
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);