import {profileAPI, userAPI} from "../Api/api";
import {stopSubmit} from "redux-form";
import {photosTypes, postsDataType, profileType} from "../types/Types";

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
    ] as Array<postsDataType>,
    profile: null as profileType | null,
    status: '',
    newPostText: ''
};

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {
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
                profile: {...state.profile, photos: action.photos} as profileType,
            }
        default:
            return state;
    }
}

export type addPostActionCreatorActionType = {
    type: typeof ADD_POST,
    newPost: string
}

export const addPostActionCreator = (newPost: string): addPostActionCreatorActionType => {
    return {
        type: ADD_POST, newPost
    }
}

export type updateNewPostTextActionCreatorActionType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newText: string
}

export const updateNewPostTextActionCreator = (text: string): updateNewPostTextActionCreatorActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

type setUserProfileActionType = {

        type: typeof SET_USER_PROFILE,
        profile: profileType
}

const setUserProfile = (profile: profileType) : setUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

type setStatusActionType = {
        type: typeof SET_STATUS,
        status: string
}

const setStatus = (status: string) :setStatusActionType => {
    return {
        type: SET_STATUS,
        status
    }
}

type savePhotoSuccessActionType = {
        type: typeof SAVE_PHOTO_SUCCESS,
        photos: photosTypes
}

const savePhotoSuccess = (photos: photosTypes) : savePhotoSuccessActionType => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await userAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (formData:profileType) => async (dispatch: any, getState: any) => {
    let response = await userAPI.saveProfile(formData);
    const userId = getState().auth.id;
    if (response.data.resultCode === 0) {
        debugger
        dispatch(getUserProfile(userId));
    } else {
        let position = response.data.messages.length > 0 ? response.data.messages[0].indexOf('Contacts->') : -1;
        if (position != -1) {
            let message1 = 'Not valid url in ' + response.data.messages[0].slice(position + 10, -1) + ' input.';
            dispatch(stopSubmit('editProfile', {_error: message1}));
            return Promise.reject();
        }
    }
}


export default profileReducer;