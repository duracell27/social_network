import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

  let postsElements = props.postsData.map(post => <Post message={post.postText} likes={post.likes} id={post.id} />);

    let addNewPost = (formData) => {
        props.addPost(formData.newPost);
    }
  
  return (
    <div>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost}/>
      <div className={cls.posts}>
        {postsElements}
      </div>
    </div>
  );
}

const AddPostForm = (props) => {
    return(
        <form className={cls.postAdd} onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} placeholder={'Add new post'} name={'newPost'}/>

            </div>
            <div><button>Add Post</button></div>
        </form>
    )
}

let AddPostFormRedux = reduxForm({
    form: 'addPost'
})(AddPostForm);

export default MyPosts;