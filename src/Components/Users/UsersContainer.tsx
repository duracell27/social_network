import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing, getUsersThunkCreator} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
    getCurrentPage,
    getFollowingInProgres,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuper
} from "../../redux/users-selectors";
import {userType} from "../../types/Types";
import {appStateType} from "../../redux/reduxStore";

type mapStateToPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<userType>
    followingInProgres: Array<number>
}

type mapDispatchToPropsType = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    setCurrentPage: (current: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type ownPropsType = {};

type propsType = mapDispatchToPropsType & mapStateToPropsType & ownPropsType;

class UsersAPIComponent extends React.Component<propsType> {
    
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (current: number) => {
        this.props.setCurrentPage(current);
        this.props.getUsersThunkCreator(current, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            // toggleIsFollowing={this.props.toggleIsFollowing}
            followingInProgres={this.props.followingInProgres}
        />
        </>
    }
}


let mapStateToProps = (state: appStateType) : mapStateToPropsType => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        // totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgres: getFollowingInProgres(state)
    }
}

export default compose(
    
    connect<mapStateToPropsType, mapDispatchToPropsType, ownPropsType, appStateType>(mapStateToProps, {
        follow,
        unfollow,
        // setUsers,
        setCurrentPage,
        // setTotalUsersCount,
        // toggleIsFetching,
        // toggleIsFollowing,
        getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersAPIComponent);