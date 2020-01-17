import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    { id: 1, likes: 4, name: "Hi world" },
    { id: 2, likes: 41, name: "My first post" },
    { id: 3, likes: 14, name: "Lalalalalal" },
    { id: 4, likes: 23, name: "i love pasta" },
    { id: 5, likes: 13, name: "pizza" },
  ]

  return (
    <div>
      <h3>My posts</h3>
      <div className={cls.postAdd}>
        <div><textarea name="post" id="" cols="30" rows="2"></textarea></div>
        <div><button>Add Post</button></div>
      </div>
      <div className={cls.posts}>
        <Post message="Hi world" likes={15} />
        <Post message="My first post" likes={12} />
        <Post message="Lalalalalal" likes={8} />
      </div>
    </div>
  );
}

export default MyPosts;