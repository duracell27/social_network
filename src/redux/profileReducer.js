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
        case ADD_POST: {
            let newPost = {
                id: 5,
                likes: 0,
                postText: state.newPostText,
            };
            let stateCopy = {...state};
            if (stateCopy.newPostText) {
                debugger;
                stateCopy.postsData = [...state.postsData];
                stateCopy.postsData.push(newPost);
                stateCopy.newPostText = '';
            }
            return stateCopy;}
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;}
        default: {
            let stateCopy = {...state};
            return stateCopy;}
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