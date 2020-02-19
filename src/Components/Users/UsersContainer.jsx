import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsercAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            debugger;
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsercAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);