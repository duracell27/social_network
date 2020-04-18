import {userAPI} from '../Api/api';
import {updateObjectInArray} from "../utils/object-helpers";
import {userType} from "../types/Types";
import {appStateType, InferActionsType} from "./reduxStore";
import {ThunkAction} from "redux-thunk";

let initialState = {
    users: [] as Array<userType>,
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>// array of users ids
};

export type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: actionsType): initialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsers}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'FOLLOWING_IN_PROGRES':
            debugger
            return {
                ...state,
                followingInProgress: action.isInProgress ? [...state.followingInProgress, action.userId] : [...state.followingInProgress.filter(id => id != action.userId)]
            }
        default:
            return state;
    }
}

type actionsType = InferActionsType<typeof actions>;

export const actions = {
    followSucces: (userId: number) => ({ type: 'FOLLOW', userId } as const),
    unfollowSucces: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
    setUsers: (users: Array<userType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsers: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsers} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleIsFollowing: (isInProgress: boolean, userId: number) => ({ type: 'FOLLOWING_IN_PROGRES', isInProgress, userId } as const)
}

type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsType>

export const getUsersThunkCreator = (currentPage: number, pageSize: number): thunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    let response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(response.items));
    dispatch(actions.setTotalUsersCount(response.totalCount));
}


export const follow = (userId: number): thunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFollowing(true, userId));
    let response = await userAPI.follow(userId);
    if (response.resultCode === 0) {

        dispatch(actions.followSucces(userId));
    }
    dispatch(actions.toggleIsFollowing(false, userId));
}

export const unfollow = (userId: number): thunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFollowing(true, userId));
    let response = await userAPI.unfollow(userId);
    if (response.resultCode === 0) {

        dispatch(actions.unfollowSucces(userId));
    }
    dispatch(actions.toggleIsFollowing(false, userId));
}


export default usersReducer;