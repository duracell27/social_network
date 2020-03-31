import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, BrowserRouter} from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>

                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={Login}/>
                    </div>

                </div>
            </BrowserRouter>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
