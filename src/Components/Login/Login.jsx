import React from 'react';
import cls from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";
import {createField} from "../Common/FormsControls/FormsControls";

let maxLength = maxLengthCreator(30);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={cls.login}>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            {createField('Email', 'email', [requiredField, maxLength], Input)}
            {createField('Password', 'password', [requiredField, maxLength], Input, {type: 'password'})}
            {createField('', 'rememberMe', null, Input, {type: 'checkbox'})}
            {props.captchaUrl ? <img src={props.captchaUrl}/> : null}
            {props.captchaUrl ? createField('Captcha symbols', 'captcha', [requiredField], Input) : null}
            {props.error ? <div className={cls.formSummaryError}>{props.error}</div> : null}
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
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);