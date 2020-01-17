import React from 'react';
import cls from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={cls.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;