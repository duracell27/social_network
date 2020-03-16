import {userAPI} from "../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';

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
    default:
      return state;
  }
}

const setAuthUserData = (data) => ({type: SET_USER_DATA, data});

export const getAuthUserData = () => (dispatch) => {
  userAPI.authMe().then(response => {
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(response.data));
    }
  });
}


export default authReducer;