import {userAPI} from '../Api/api';
import {updateObjectInArray} from "../utils/object-helpers";
import {userType} from "../types/Types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRES = 'FOLLOWING_IN_PROGRES';

let initialState = {
    users: [] as Array<userType>,
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgres: [] as Array<number> // array of users ids
};

export type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsers}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case FOLLOWING_IN_PROGRES:
            return {
                ...state,
                followingInProgres: action.followingInProgres ? [...state.followingInProgres, action.userId] : [state.followingInProgres.filter(id => id != action.userId)]
            }
        default:
            return state;
    }
}

export type followSuccesActionType = {
    type: typeof FOLLOW,
    userId: number
}

export const followSucces = (userId: number): followSuccesActionType => {
    return {
        type: FOLLOW,
        userId
    }
}

export type unfollowSuccesActionType = {
    type: typeof UNFOLLOW,
    userId: number
}

export const unfollowSucces = (userId: number): unfollowSuccesActionType => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export type setUsersActionType = {
    type: typeof SET_USERS,
    users: Array<userType>
}

export const setUsers = (users: Array<userType>): setUsersActionType => {
    return {
        type: SET_USERS,
        users
    }
}

export type setCurrentPageActionType = {
        type: typeof SET_CURRENT_PAGE,
        currentPage: number
}

export const setCurrentPage = (currentPage: number) : setCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export type setTotalUsersCountActionType = {
        type: typeof SET_TOTAL_USERS_COUNT,
        totalUsers: number

}

export const setTotalUsersCount = (totalUsers: number) :setTotalUsersCountActionType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsers
    }
}

export type toggleIsFetchingActionType = {
        type: typeof TOGGLE_IS_FETCHING,
        isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean) : toggleIsFetchingActionType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export type toggleIsFollowingActionType = {
        type: typeof FOLLOWING_IN_PROGRES,
        followingInProgres: boolean
        userId: number
}

export const toggleIsFollowing = (followingInProgres: boolean, userId: number) : toggleIsFollowingActionType => {
    return {
        type: FOLLOWING_IN_PROGRES,
        followingInProgres,
        userId
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    let response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}


export const follow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleIsFollowing(true, userId));
    let response = await userAPI.follow(userId);
    if (response.resultCode === 0) {

        dispatch(followSucces(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleIsFollowing(true, userId));
    let response = await userAPI.unfollow(userId);
    if (response.resultCode === 0) {

        dispatch(unfollowSucces(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}


export default usersReducer;