import React from 'react';

import {
    sendMessageCreator, updateNewMessageBodyCreator,
} from "../../../Redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        messagesData:state.messagesPage.messagesData,
        newMessageBody:state.messagesPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage:() => {dispatch(sendMessageCreator());},
        updateNewMessageBody:(mess) => {
            dispatch(updateNewMessageBodyCreator(mess));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;
