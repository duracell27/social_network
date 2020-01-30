import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';



const MyPosts = (props) => {

  let postsElements = props.postsData.postsData.map(post => <Post message={post.postText} likes={post.likes} id={post.id} />);

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }
  
  return (
    <div>
      <h3>My posts</h3>
      <div className={cls.postAdd}>
        <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} name="post" id="" cols="30" rows="2"></textarea></div>
        <div><button onClick={addPost}>Add Post</button></div>
      </div>
      <div className={cls.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;