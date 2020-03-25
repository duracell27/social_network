import React from 'react';
import cls from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} picUrl={dialog.picUrl}/> );

    let messagesElements = props.messagesData.map( message => <Message message={message.message} id={message.id} my={message.my}/> );

    let addMessage = () => {
        props.addMessage();
    }
    
    // let onMessageChange = () => {
    //     let text = addNewMessage.current.value;
    //     props.updateNewMessageBody(text);
    // }

    let addNewMessage = (formData) => {
        props.addMessage(formData.newMessage);
    }

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cls.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    );
}

const AddMessageForm = (props) => {
    return (
        <form className={cls.addMessage} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessage'} placeholder={'Enter your message'}/>
            <br></br>
            <button>Add Message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'addMessage'
})(AddMessageForm);

export default Dialogs;