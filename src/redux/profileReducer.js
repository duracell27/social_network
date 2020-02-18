const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  postsData: [
    { id: 1, likes: 4, postText: "Hi world" },
    { id: 2, likes: 41, postText: "My first post" },
    { id: 3, likes: 14, postText: "Lalalalalal" },
    { id: 4, likes: 23, postText: "i love pasta" },
    { id: 5, likes: 13, postText: "pizza" },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        likes: 0,
        postText: state.newPostText,
      };

      if (state.newPostText) {
        return {
          ...state,
          postsData: [...state.postsData, newPost],
          newPostText: ''
        }
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}


export default profileReducer;