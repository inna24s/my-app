import React from 'react';
import s from "./Messages.module.css"

const Message = (props) => {
    return (
        <div className={s.message}>
            <img src={props.imgAdr}/>
            {props.message}
        </div>
    );
}
const Messages = (props) => {
    let messElmnts = props.messagesData.map(el => <Message message={el.message} key={el.id} imgAdr={el.imgAdr}/>);
    let addMessage = () => {
        props.sendMessage();
    }

    let updateNewTextMessage = (e) =>{
        let mess = e.target.value;
        props.updateNewMessageBody(mess);
    }

    return (
        <div>
            <div className={s.messages}>
                {messElmnts}
            </div>
            <div>
                <textarea onChange={updateNewTextMessage} value={props.newMessageBody}/>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
}

export default Messages;
