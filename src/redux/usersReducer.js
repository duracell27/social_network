import {userAPI} from '../Api/api';
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRES = 'FOLLOWING_IN_PROGRES';

let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgres: []
};

const usersReducer = (state = initialState, action) => {

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

export const followSucces = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowSucces = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (totalUsers) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsers
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleIsFollowing = (followingInProgres, userId) => {
    return {
        type: FOLLOWING_IN_PROGRES,
        followingInProgres,
        userId
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}


export const follow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    let response = await userAPI.follow(userId);
    if (response.resultCode === 0) {

        dispatch(followSucces(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    let response = await userAPI.unfollow(userId);
    if (response.resultCode === 0) {

        dispatch(unfollowSucces(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}


export default usersReducer;