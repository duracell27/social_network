import React from 'react';
import cls from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return(
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                <div className={`${cls.dialog} ${cls.active}`}>
                    <NavLink to="/dialogs/1">dima </NavLink>
                </div>
                <div className={cls.dialog}>
                    <NavLink to="/dialogs/2">rostik </NavLink>
                </div>
                <div className={cls.dialog}>
                    <NavLink to="/dialogs/3">anton </NavLink>
                </div>
                <div className={cls.dialog}>
                    <NavLink to="/dialogs/4">sasha </NavLink>
                </div>
                <div className={cls.dialog}>
                    <NavLink to="/dialogs/5">roman </NavLink>
                </div>
            </div>
            <div className={cls.messges}>
                <div className={cls.message}>Hi</div>
                <div className={cls.message}>Hello</div>
                <div className={cls.message}>how are you</div>
                <div className={cls.message}>fine</div>
            </div>
        </div>
        
    );
}

export default Dialogs;