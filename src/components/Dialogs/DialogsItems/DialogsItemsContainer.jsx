import React from 'react';
import DialogsItems from "./DialogsItems";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        dialogsData:state.messagesPage.dialogsData
    }
}
let mapDispatchToProps = (dispatch) =>{return {}}

const DialogsItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsItems);

export default DialogsItemsContainer;