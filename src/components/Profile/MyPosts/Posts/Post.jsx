import React from 'react';
import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://static.zerochan.net/Griffith.%28BERSERK%29.full.2176939.jpg'/>
            {props.message}
            <div>Like = {props.like}</div>
        </div>
    )
}
export default Post;