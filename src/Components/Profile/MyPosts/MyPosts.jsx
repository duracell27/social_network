import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.postsData.postsData.map( post => <Post message={post.postText} likes={post.likes} id={post.id} /> );

  return (
    <div>
      <h3>My posts</h3>
      <div className={cls.postAdd}>
        <div><textarea name="post" id="" cols="30" rows="2"></textarea></div>
        <div><button>Add Post</button></div>
      </div>
      <div className={cls.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;