import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Posts/Post";


const MyPosts = (props) => {
    let postElement =
        props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.Profile}>
            <h3>New posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;