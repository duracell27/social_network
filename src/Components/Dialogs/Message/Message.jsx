import React from 'react';
import cls from './../Dialogs.module.css';



const Message = (props) => {

    if(props.my){
        return(
            <div className={`${cls.message} ${cls.my}`}>{props.message}</div>
        );
    }else{
        return(
            <div className={cls.message}>{props.message}</div>
        );
    }
}

export default Message;