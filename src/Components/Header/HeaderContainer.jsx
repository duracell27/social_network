import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getAuthUserData, logOut} from '../../redux/AuthReducer';
import { userAPI } from '../../Api/api';

class HeaderContainer extends React.Component {



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

export default connect(mapStateToProps, {logOut})(HeaderContainer);