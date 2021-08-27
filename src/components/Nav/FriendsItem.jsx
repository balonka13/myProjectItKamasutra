import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";


const FriendsItem = (props) => {
    return (
        <div>
            <div className={classes.avatar}>
                <img src={props.src}/>
            </div>
            <div className={classes.dialog + ' ' + classes.dialog}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default FriendsItem;