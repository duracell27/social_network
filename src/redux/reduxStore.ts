import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";
import exp from "constants";

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

export type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U: never
export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store