import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    { id: 1, likes: 4, postText: "Hi world" },
    { id: 2, likes: 41, postText: "My first post" },
    { id: 3, likes: 14, postText: "Lalalalalal" },
    { id: 4, likes: 23, postText: "i love pasta" },
    { id: 5, likes: 13, postText: "pizza" },
  ]

  let dialogsData = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Anton"},
    {id: 3, name: "Rostik"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Roman"},
    {id: 6, name: "Valik"},
]

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "how are you"},
    {id: 4, message: "fine"},
    {id: 5, message: "good"},
]

ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
