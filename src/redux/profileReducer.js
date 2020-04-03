import {profileAPI, userAPI} from "../Api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        {id: 1, likes: 4, postText: "Hi world"},
        {id: 2, likes: 41, postText: "My first post"},
        {id: 3, likes: 14, postText: "Lalalalalal"},
        {id: 4, likes: 23, postText: "i love pasta"},
        {id: 5, likes: 13, postText: "pizza"},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                likes: 0,
                postText: action.newPost,
            };

            if (action.newPost) {
                return {
                    ...state,
                    postsData: [...state.postsData, newPost]
                }
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => {
    return {
        type: ADD_POST, newPost
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await userAPI.savePhoto(file);

    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (formData) => async (dispatch, getState) => {
    let response = await userAPI.saveProfile(formData);
    const userId = getState().auth.id;
    if(response.data.resultCode === 0){
        debugger
        dispatch(getUserProfile(userId));
    }else {
        let position = response.data.messages.length > 0 ? response.data.messages[0].indexOf('Contacts->') : -1;
        if (position != -1) {
            let message1 = 'Not valid url in ' + response.data.messages[0].slice(position + 10, -1) + ' input.';
            dispatch(stopSubmit('editProfile', {_error: message1}));
            return Promise.reject();
        }

        // let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something is wrong';
        // dispatch(stopSubmit('editProfile', {_error: message1}));
    }
}


export default profileReducer;