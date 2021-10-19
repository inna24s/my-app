import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/FindUsers/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderComponent";

const App = (props) => {
    return (

            <div className='app-wrapper'>
                <HeaderComponent/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path = '/dialogs' render = { () => <Dialogs />}/>
                    <Route path = '/profile/:userId?' render = {() => <ProfileContainer />}/>
                    <Route path= '/music' render = {() => <Music />} />
                    <Route path= '/news' render = { () => <News />} />
                    <Route path = '/settings' render = { () => <Settings  />} />
                    <Route path = '/friends' render = { () => <Friends  />} />
                    <Route path = '/findUsers' render={ () => <UsersContainer />} />
                </div>
            </div>

    );
}

export default App;
