import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";


const Friends = (props) => {
    // let friendEl = props.friendList.friends.map(friend => <Friend name={friend.name}
    //                                                imgAdr={friend.imgAdr}/>)
    return <div className={s.friends}>
        <h3>Friends</h3>
        <div>
            {"friendEl"}
        </div>
    </div>
}

export default Friends;