import React from 'react';
import ReactDOM from 'react-dom';
// import ToDoList from './ToDoList';
import ReactRedux from './React-redux';
import {Provider} from 'react-redux'
import store from './store'

const App = (
  <Provider store={store}>
    <ReactRedux />
  </Provider>
)

ReactDOM.render(
  // <React.StrictMode>
    App
  // </React.StrictMode>,
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
