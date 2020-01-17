import React from 'react';
import cls from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div className={cls.content}>
      <div>
        <img src='https://panovatravel.com/wp-content/uploads/2017/12/original-1800955822-1200x300.jpg' alt='profimg'></img>
      </div>
      <div>
        ava descr
      </div>
    </div>
  );
}

export default ProfileInfo;