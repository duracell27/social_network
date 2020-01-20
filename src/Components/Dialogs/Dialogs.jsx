import React from 'react';
import cls from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    // let dialogsData = [
    //     {id: 1, name: "Dima"},
    //     {id: 2, name: "Anton"},
    //     {id: 3, name: "Rostik"},
    //     {id: 4, name: "Sasha"},
    //     {id: 5, name: "Roman"},
    //     {id: 6, name: "Valik"},
    // ]

    // let messagesData = [
    //     {id: 1, message: "Hi"},
    //     {id: 2, message: "Hello"},
    //     {id: 3, message: "how are you"},
    //     {id: 4, message: "fine"},
    //     {id: 5, message: "good"},
    // ]

    let dialogsElements = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = props.messagesData.map( message => <Message message={message.message} id={message.id} /> );

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