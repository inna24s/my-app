import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src={props.imgAdr}/>
        {props.message}
        <div>
            <span>Like </span> {props.likecount}
        </div>

    </div>
}

export default Post;
