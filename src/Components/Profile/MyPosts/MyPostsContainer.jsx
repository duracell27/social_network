import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
  debugger;

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }
  
  return (
    <MyPosts updateNewPostText={onPostChange} 
      addPost={addPost} 
      postsData={state.profile.postsData} 
      newPostText={state.profile.newPostText}/>
  );
}

export default MyPostsContainer;