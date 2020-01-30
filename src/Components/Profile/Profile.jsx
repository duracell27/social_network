import React from 'react';
import cls from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={cls.content}>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} dispatch={props.dispatch} newPostText={props.postsData.newPostText}/>
    </div>
  );
}

export default Profile;