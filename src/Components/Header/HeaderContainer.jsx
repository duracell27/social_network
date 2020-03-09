import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';
import { userAPI } from '../../Api/api';

class HeaderContainer extends React.Component {

    componentDidMount(){
        
        userAPI.authMe().then(response => {
            if(response.resultCode === 0){
                this.props.setAuthUserData(response.data);
            }
        });
    }

    render() {
        return (
            <Header {...this.props}  />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);