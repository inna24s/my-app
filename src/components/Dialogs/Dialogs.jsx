import React from 'react';
import s from "./Dialogs.module.css"
import MessagesContainer from "./Messeges/MessagesContainer";
import DialogsItemsContainer from "./DialogsItems/DialogsItemsContainer";

const Dialogs = (props) => {


    return (
        <div className={s.dialogs}>
            <DialogsItemsContainer />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;