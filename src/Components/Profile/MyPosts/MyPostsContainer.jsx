import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return{
    postsData: state.profile.postsData, 
    newPostText: state.profile.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    addPost: (newPost) => {
      dispatch(addPostActionCreator(newPost));
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;