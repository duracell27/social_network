import {userAPI} from "../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const DEL_USER_DATA = 'DEL_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
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
    default:
      return state;
  }
}

const setAuthUserData = (data) => ({type: SET_USER_DATA, data});
const delAuthUserData = () => ({type: DEL_USER_DATA});

export const getAuthUserData = () => (dispatch) => {
  userAPI.authMe().then(response => {
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(response.data));
    }
  });
}

export const login = (email, password, rememberMe) => (dispatch) => {
  userAPI.login(email, password, rememberMe).then(response => {
    if (response.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
}

export const logOut = () => (dispatch) => {
  userAPI.logOut().then(response => {
    if (response.resultCode === 0) {
      dispatch(delAuthUserData());
    }
  });
}


export default authReducer;