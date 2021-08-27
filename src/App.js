import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import News from "./components/Nav/News/News";
import Music from "./components/Nav/Music/Music";
import Settings from "./components/Nav/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/MyPosts/ProfileContainer";
import HeaderComponenr from "./components/Header/HeaderContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/profile:userId?'
                       render={ () => <ProfileContainer store={props.store} /> }/>
                <Route path='/dialogs'
                       render={ () => <DialogsContainer store={props.store} /> }/>
                <Route path='/users'
                       render={ () => <UserContainer /> }/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>

    );
}


export default App;
