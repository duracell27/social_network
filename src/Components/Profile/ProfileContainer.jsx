import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

    refreshProfile(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.userId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount(){
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}
            isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
          );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    userId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



