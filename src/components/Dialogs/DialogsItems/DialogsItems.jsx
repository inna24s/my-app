import React from 'react';
import s from "./DialogsItems.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}  className={s.dialog} >
                <img src={props.imgAdr} />{props.name}
            </NavLink>
        </div>

    );
}

const DialogsItems = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => <Dialog name = {dialog.name}  key={dialog.id} id = {dialog.id} imgAdr={dialog.imgAdr}/>);

    return (
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
    );
}

export default DialogsItems;