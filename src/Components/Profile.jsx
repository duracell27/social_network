import React from 'react';
import cls from './Profile.module.css';

const Profile = () => {
    return(
        <div className={cls.content}>
        <div>
        <img src='https://panovatravel.com/wp-content/uploads/2017/12/original-1800955822-1200x300.jpg'></img>
        </div>
        <div>
          ava descr
        </div>
        <div>
          my posts
          <div>new post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    );
}

export default Profile;