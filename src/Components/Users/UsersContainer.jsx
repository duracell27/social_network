import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsercAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';

class UsersAPIComponent extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            debugger;
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (current) => {
        this.props.setCurrentPage(current);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${current}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <Users currentPage={this.props.currentPage}
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsercAC(users));
        },
        setCurrentPage: (current) => {
            dispatch(setCurrentPageAC(current));
        },
        setTotalUsersCount: (totalUsers) => {
            dispatch(setTotalUsersCountAC(totalUsers));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);