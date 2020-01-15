import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return(
        <div>
          my posts
          <div>
            <textarea name="post" id="" cols="30" rows="10"></textarea>
            <button>Add Post</button>
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