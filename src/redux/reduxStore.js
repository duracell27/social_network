import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

let redusers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    users: usersReducer
});

let store = createStore(redusers);

export default store;