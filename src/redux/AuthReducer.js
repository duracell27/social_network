import {securityAPI, userAPI} from "../Api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const DEL_USER_DATA = 'DEL_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: true
            }
        case DEL_USER_DATA:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

const setAuthUserData = (data) => ({type: SET_USER_DATA, data});
const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl});
const delAuthUserData = () => ({type: DEL_USER_DATA});

export const getAuthUserData = () => async (dispatch) => {
    let response = await userAPI.authMe();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await userAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.messages.length > 0 ? response.messages[0] : 'Something is wrong';
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const logOut = () => async (dispatch) => {
    let response = await userAPI.logOut();
    if (response.resultCode === 0) {
        dispatch(delAuthUserData());
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    dispatch(getCaptchaUrlSuccess(response.data.url));
    debugger

}


export default authReducer;