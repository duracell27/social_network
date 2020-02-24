const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        { id: 1, name: "Dima", picUrl: 'https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' },
        { id: 2, name: "Anton", picUrl: 'data:image/jpeg;base64,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' },
        { id: 3, name: "Rostik", picUrl: 'https://images.unsplash.com/photo-1559628129-67cf63b72248?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' },
        { id: 4, name: "Sasha", picUrl: 'https://images.photolamus.com/UPL74SwM/463x463/c/m/572b1bd45f0c25f2a9800fb5c7838ac0/watercolor-bird-portrait-photos-example.jpg' },
        { id: 5, name: "Roman", picUrl: 'https://drop.ndtv.com/albums/AUTO/pininfarina-battista/640_640x480.jpg' },
        { id: 6, name: "Valik", picUrl: 'https://picjumbo.com/wp-content/uploads/free-stock-photos-san-francisco-1080x720.jpg' },
    ],
    messagesData: [
        { id: 1, message: "Hi", my: 1 },
        { id: 2, message: "Hello", my: 0 },
        { id: 3, message: "how are you", my: 1 },
        { id: 4, message: "fine", my: 0 },
        { id: 5, message: "good", my: 1 },
    ],
    newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            
            let newMessage = {
                id: 6,
                message: state.newMessageText,
                my: 1,
            };
            if (state.newMessageText) {
                return{
                    ...state,
                    messagesData: [...state.messagesData, newMessage],
                    newMessageText: ''
                }
            } 
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default: 
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
      type: ADD_MESSAGE
    }
  }
  
export const updateNewMessageTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text
    }
}

export default messagesReducer;