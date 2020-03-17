import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
          );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth
})

let ProfileContainerWithUrl = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithUrl);