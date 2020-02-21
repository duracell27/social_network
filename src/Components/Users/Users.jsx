import React from 'react';
import cls from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/people.png';

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div className={cls.usersWrap} >
            <button onClick={this.showusers}> Show People </button>
            {
                this.props.users.map((user) => <div className={cls.userItem} key={user.id}>
                    <div className={cls.ava}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="ava" />
                        {user.followed ? <button onClick={() => { this.props.unfollow(user.id) }}> Unfollow </button> : <button onClick={() => { this.props.follow(user.id) }}> Follow </button>}
                    </div>
                    <div className={cls.userDescr}>
                        <p><span>Name: </span>{`${user.name}`}</p>
                        <p><span>Status: </span>{`${user.status}`}</p>
                        {/* <p><span>Age: </span>{user.age}</p>
                        <p><span>Location: </span>{`${user.location.city}, ${user.location.country}`}</p> */}
                    </div>
                </div>
                )
            }
        </div >

    }
}

export default Users;