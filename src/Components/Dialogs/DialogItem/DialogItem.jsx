import React from 'react';
import cls from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={`${cls.dialog} ${cls.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>
                <div className={cls.dialogWrap}>
                    <img src={props.picUrl} alt="ava" />
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
}

export default DialogItem;