import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as Axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component{

    componentDidMount(){
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);