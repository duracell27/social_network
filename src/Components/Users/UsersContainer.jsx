import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing} from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../Common/Preloader/Preloader';
import { userAPI} from '../../Api/api';

class UsersAPIComponent extends React.Component {
    
    componentDidMount() {
        this.props.toggleIsFetching(true);
        
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.items);
            this.props.toggleIsFetching(false);
            this.props.setTotalUsersCount(response.totalCount);
        });
    }

    onPageChanged = (current) => {
        this.props.setCurrentPage(current);
        this.props.toggleIsFetching(true);
    
        userAPI.getUsers(current, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            toggleIsFollowing={this.props.toggleIsFollowing}
            followingInProgres={this.props.followingInProgres}
        />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgres: state.users.followingInProgres
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowing,
})(UsersAPIComponent);