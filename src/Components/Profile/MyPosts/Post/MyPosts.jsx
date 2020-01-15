import React from 'react';
import cls from './MyPosts.module.css';

const MyPosts = () => {
    return(
        <div>
          my posts
          <div>new post</div>
          <div className={cls.posts}>
            <div className={cls.item}>post 2</div>
            <div className={cls.item}>post 1</div>
          </div>
        </div>
    );
}

export default MyPosts;