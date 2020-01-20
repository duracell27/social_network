import React from 'react';
import cls from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsData.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} picUrl={dialog.picUrl}/> );

    let messagesElements = props.dialogsData.messagesData.map( message => <Message message={message.message} id={message.id} my={message.my}/> );

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cls.messges}>
                {messagesElements}
            </div>
        </div>

    );
}

export default Dialogs;