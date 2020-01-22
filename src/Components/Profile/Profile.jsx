import React from 'react';
import cls from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div className={cls.content}>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} addPost={props.addPost}/>
    </div>
  );
}

export default Profile;