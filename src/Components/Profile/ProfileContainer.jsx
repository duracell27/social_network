import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as Axios from 'axios';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import {userAPI} from "../../Api/api";

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    

    render(){
        if(!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
          );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth
})

let ProfileContainerWithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithUrl);