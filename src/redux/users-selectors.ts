import {createSelector} from "reselect";
import {appStateType} from "./reduxStore";

export const getUsers = (state: appStateType) => {
    return state.users.users;
}

export const getUsersSuper = createSelector(getUsers,(users) => {
    return  users.filter(u => true);
})

export const getPageSize = (state: appStateType) => {
    return state.users.pageSize;
}

export const getTotalUsersCount = (state: appStateType) => {
    return state.users.totalUsersCount;
}

export const getCurrentPage = (state: appStateType) => {
    return state.users.currentPage;
}

export const getIsFetching = (state: appStateType) => {
    return state.users.isFetching;
}

export const getFollowingInProgres = (state: appStateType) => {
    return state.users.followingInProgres;
}