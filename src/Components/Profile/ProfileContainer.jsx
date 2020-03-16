import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as Axios from 'axios';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import {userAPI} from "../../Api/api";

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
        // userAPI.getProfile(userId).then(response => {
        //     this.props.setUserProfile(response.data);
        // });
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
          );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profile.profile,
})

let ProfileContainerWithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithUrl);