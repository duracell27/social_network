import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

let redusers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer
});

let store = createStore(redusers);

export default store;