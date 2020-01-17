import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    { id: 1, likes: 4, postText: "Hi world" },
    { id: 2, likes: 41, postText: "My first post" },
    { id: 3, likes: 14, postText: "Lalalalalal" },
    { id: 4, likes: 23, postText: "i love pasta" },
    { id: 5, likes: 13, postText: "pizza" },
  ]

  let postsElements = postsData.map( post => <Post message={post.postText} likes={post.likes} id={post.id} /> );

  return (
    <div>
      <h3>My posts</h3>
      <div className={cls.postAdd}>
        <div><textarea name="post" id="" cols="30" rows="2"></textarea></div>
        <div><button>Add Post</button></div>
      </div>
      <div className={cls.posts}>
        {postsElements}
        {/* <Post message="Hi world" likes={15} />
        <Post message="My first post" likes={12} />
        <Post message="Lalalalalal" likes={8} /> */}
      </div>
    </div>
  );
}

export default MyPosts;