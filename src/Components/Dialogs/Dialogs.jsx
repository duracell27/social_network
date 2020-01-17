import React from 'react';
import cls from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={`${cls.dialog} ${cls.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
    <div className={cls.message}>{props.message}</div>
    );
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Anton"},
        {id: 3, name: "Rostik"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Roman"},
        {id: 6, name: "Valik"},
    ]

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "how are you"},
        {id: 4, message: "fine"},
        {id: 5, message: "good"},
    ]

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = messagesData.map( message => <Message message={message.message} id={message.id} /> );

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElements}
                {/* <DialogItem name="Dima" id="1" />
                <DialogItem name="Anton" id="2" />
                <DialogItem name="Rostik" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Roman" id="5" /> */}
            </div>
            <div className={cls.messges}>
                {messagesElements}
                {/* <Message message="Hi" />
                <Message message="Hello" />
                <Message message="how are you" />
                <Message message="fine" /> */}
            </div>
        </div>

    );
}

export default Dialogs;