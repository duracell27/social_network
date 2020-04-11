import React from 'react';
import cls from './Login.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";
import {createField} from "../Common/FormsControls/FormsControls";
import {userType} from "../../types/Types";
import {appStateType} from "../../redux/reduxStore";

let maxLength = maxLengthCreator(30);

type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

type ownPropsType = {

};

type propsType = mapStateToPropsType & mapDispatchToPropsType & ownPropsType;

export type loginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

type loginFormValuesTypeKeys = Extract<keyof loginFormValuesType, string>


type ownLoginFormType = {
    captchaUrl: string | null
}

const Login: React.FC<propsType> = (props) => {
    const onSubmit = (formData : loginFormValuesType) => {
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

const LoginForm: React.FC<InjectedFormProps<loginFormValuesType, ownLoginFormType> & ownLoginFormType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            {createField<loginFormValuesTypeKeys>('Email', 'email', [requiredField, maxLength], Input)}
            {createField<loginFormValuesTypeKeys>('Password', 'password', [requiredField, maxLength], Input, {type: 'password'})}
            {createField<loginFormValuesTypeKeys>('', 'rememberMe', [], Input, {type: 'checkbox'})}
            {props.captchaUrl ? <img src={props.captchaUrl}/> : null}
            {props.captchaUrl ? createField<loginFormValuesTypeKeys>('Captcha symbols', 'captcha', [requiredField], Input) : null}
            {props.error ? <div className={cls.formSummaryError}>{props.error}</div> : null}
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<loginFormValuesType, ownLoginFormType>({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state : appStateType) : mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);