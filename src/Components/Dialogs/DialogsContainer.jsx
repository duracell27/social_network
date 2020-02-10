import React from 'react';
import cls from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
      }
    
      let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
      }

    return (
        <Dialogs updateNewMessageBody={onMessageChange} addMessage={addMessage} 
        dialogsData={state.messages.dialogsData}
        messagesData={state.messages.messagesData}
        newMessageText={state.messages.newMessageText} />
    );
}

export default DialogsContainer;