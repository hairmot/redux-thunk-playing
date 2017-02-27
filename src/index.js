import React from 'react';
import thunkMiddleware from 'redux-thunk'
import ReactDOM from 'react-dom';
import AddTodoForm from './Components/AddToDoForm';
import {createStore, applyMiddleware} from 'redux';
import Reducer from './Reducers/Reducer';
import { Provider } from 'react-redux';

let store = createStore(Reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <AddTodoForm />
  </Provider>,
  document.getElementById('container')
);
