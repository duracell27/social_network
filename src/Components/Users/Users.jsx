import React from 'react';
import userPhoto from '../../assets/img/people.png';
import cls from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { userAPI } from '../../Api/api';

const Users = (props) => {

    let pages = [];

    for (let i = props.currentPage - 3; i <= props.currentPage + 3; i++) {
        if (i <= 0) {
            continue;
        } else {
            pages.push(i);
        }
    }

    return <div className={cls.usersWrap} >
        <div className={cls.pagination}>
            {pages.map(p => {
                return <span className={props.currentPage === p && cls.selectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>

        {
            props.users.map((user) => <div className={cls.userItem} key={user.id}>
                <div className={cls.ava}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="ava" />
                    </NavLink>
                    {user.followed ? <button onClick={() => {

                        userAPI.unfollow(user.id).then(response => {
                            if (response.resultCode === 0) {

                                props.unfollow(user.id);
                            }
                        });

                    }}> Unfollow </button> : <button onClick={() => {

                        userAPI.follow(user.id).then(response => {
                            if (response.resultCode === 0) {

                                props.follow(user.id);
                            }
                        });

                    }}> Follow </button>}
                </div>
                <div className={cls.userDescr}>
                    <p><span>Name: </span>{`${user.name}`}</p>
                    <p><span>Status: </span>{`${user.status}`}</p>
                </div>
            </div>
            )
        }
        <div className={cls.pagination}>
            {pages.map(p => {
                return <span className={props.currentPage === p && cls.selectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
    </div >
}

export default Users;