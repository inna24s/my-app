import React from 'react';
import s from './Friend.module.css';

const Friend = (props) =>{
    return(
        <div className={s.friend}>
            <img src = {props.imgAdr} />
            {props.name}
        </div>
    )
}




export default Friend;