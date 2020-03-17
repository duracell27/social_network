import React from 'react';
import cls from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} picUrl={dialog.picUrl}/> );

    let messagesElements = props.messagesData.map( message => <Message message={message.message} id={message.id} my={message.my}/> );

    let addNewMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }
    
    let onMessageChange = () => {
        let text = addNewMessage.current.value;
        props.updateNewMessageBody(text);
    }

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cls.messges}>
                {messagesElements}
                <div className={cls.addMessage}>
                    <textarea ref={addNewMessage} value={props.newMessageText} onChange={onMessageChange} name="newMessage"></textarea><br></br>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;