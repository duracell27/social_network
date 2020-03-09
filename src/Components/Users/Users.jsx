import React from 'react';
import userPhoto from '../../assets/img/people.png';
import cls from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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

                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '251154dd-b681-47d2-ae11-fdc0159dfce0'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {

                                props.unfollow(user.id);
                            }
                        });

                    }}> Unfollow </button> : <button onClick={() => {

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '251154dd-b681-47d2-ae11-fdc0159dfce0'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {

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