import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type reducersType = typeof reducers;
export type appStateType = ReturnType<reducersType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store