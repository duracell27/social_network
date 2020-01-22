import React from 'react';
import cls from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsData.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} picUrl={dialog.picUrl}/> );

    let messagesElements = props.dialogsData.messagesData.map( message => <Message message={message.message} id={message.id} my={message.my}/> );

    let addNewMessage = React.createRef();

    let addMessage = () => {

        let text = addNewMessage.current.value; 

        alert(text);
    }

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cls.messges}>
                {messagesElements}
                <div className={cls.addMessage}>
                    <textarea ref={addNewMessage} name="newMessage"></textarea><br></br>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;