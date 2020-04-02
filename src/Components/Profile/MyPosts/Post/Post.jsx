import React from 'react';
import cls from './Post.module.css';
import noAva from "../../../../assets/img/people.png";

const Post = (props) => {
    return (

        <div className={cls.item}>
            <div className={cls.wrap}>
                <img src={props.profile.photos.small || noAva} alt="ava"/>
                <p>{props.message} </p>
            </div>

            <div className={cls.likes}>
                <span>Like {props.likes}</span>
            </div>
        </div>

    );
}

export default Post;