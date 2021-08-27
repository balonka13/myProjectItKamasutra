import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";


const Nav = (props) => {
    return (

        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={classes.itemSettings}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div className={classes.friends}>

                Friends

                <div className={classes.friendsItem}></div>
            </div>
        </nav>
    )

}

export default Nav;