import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    return (
        <div>
            <div className={s.avatar}>
                <img src={props.dialog}/>
                {props.dialog}

            </div>
            <div className={s.dialog}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}


export default DialogsItem;