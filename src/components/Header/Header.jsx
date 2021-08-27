import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const  Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/9d/99/2c/9d992c0bc56ab36c319f5cf73a6c2c77.png'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;