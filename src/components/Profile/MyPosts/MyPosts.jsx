import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElements = props.postsData.map(post => <Post key={post.id} message={post.message}
                                                   imgAdr={post.imgAdr}
                                                   likecount={post.likecount}/>)
    let onAddPost = ()=>{
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add Post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}

export default MyPosts;