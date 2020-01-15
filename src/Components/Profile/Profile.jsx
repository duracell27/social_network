import React from 'react';
import cls from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className={cls.content}>
        <div>
        <img src='https://panovatravel.com/wp-content/uploads/2017/12/original-1800955822-1200x300.jpg' alt='profimg'></img>
        </div>
        <div>
          ava descr
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;