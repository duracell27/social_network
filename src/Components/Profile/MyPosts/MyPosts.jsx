import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../Common/FormsControls/FormsControls";

let maxLength = maxLengthCreator(30);

const MyPosts = React.memo( props => {

    let postsElements;
    if(props.profile){
        postsElements = props.postsData.map(post => <Post profile={props.profile} message={post.postText} likes={post.likes} id={post.id}/>).reverse();
    }
    else {
        return null
    }


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
});

const AddPostForm = (props) => {

    return(
        <form className={cls.postAdd} onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} placeholder={'Add new post'} name={'newPost'} validate={[requiredField, maxLength]}/>

            </div>
            <div className={cls.addPostButton}><button>Add Post</button></div>
        </form>
    )
}

let AddPostFormRedux = reduxForm({
    form: 'addPost'
})(AddPostForm);

export default MyPosts;