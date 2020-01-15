import React from 'react';
import cls from './Post.module.css';

const Post = (props) => {
  return (

    <div className={cls.item}>
      <img src="http://cdn01.ru/files/users/images/32/c4/32c4cb047498da9301d64986ee0a646b.jpeg" alt="" />
      {props.message}
      <div className="likes">
        <span>Like {props.likes}</span>
      </div>
    </div>

  );
}

export default Post;