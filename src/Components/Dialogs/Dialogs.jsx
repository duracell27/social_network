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
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Anton" id="2" />
                <DialogItem name="Rostik" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Roman" id="5" />
            </div>
            <div className={cls.messges}>
                <Message message="Hi" />
                <Message message="Hello" />
                <Message message="how are you" />
                <Message message="fine" />
            </div>
        </div>

    );
}

export default Dialogs;