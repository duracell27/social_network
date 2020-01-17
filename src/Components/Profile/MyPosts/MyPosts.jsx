import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return(
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