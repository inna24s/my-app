import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return <header className={classes.header}>
        <img src="https://cfunity-school-logos.nfhsnetwork.com/v1/wheeler-high-school-marietta-ga_8a484f2dd8.png"/>
        ChatterBox
        <div className={classes.loginBlock}>
            {props.isAuth? props.login: <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;