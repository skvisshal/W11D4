import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';
import allTodos from "./reducers/selectors.js"

import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO, receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP, receiveStep, receiveSteps, removeStep } from './actions/step_actions';

const items = {
  todos: {
    1: {
      id: 1,
      title: 'take a shower',
      body: 'and be clean',
      done: false
    }
  },
  steps: {
    1: { // this is the step with id = 1
      id: 1,
      title: 'walk to store',
      done: false,
      todo_id: 1
    },
    2: { // this is the step with id = 2
      id: 2,
      title: 'buy soap',
      done: false,
      todo_id: 1
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
    let preloadedState = {};
    if(localStorage.state) {
      preloadedState = JSON.parse(localStorage.state);
    }
    const store = configureStore(preloadedState);
    //window.store = store;
    const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }, { id: 2, title: 'Learn React',}];
    // const newSteps = [{ id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }, { id: 2}];
    store.dispatch(receiveTodos(newTodos));
    //store.dispatch(receiveSteps(newSteps));
    // console.log(allTodos(store.getState()));
    ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
 
});