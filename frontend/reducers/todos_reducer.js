
import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const newTodos = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_TODOS:
            for(const index in action.todos) {
                nextState[action.todos[index].id] = action.todos[index];
            }
            return nextState;
        case RECEIVE_TODO:
          const newState = {[action.todo.id] : action.todo};
          return Object.assign({}, state, newState);
        case REMOVE_TODO:
          nextState =Object.assign({}, state);
          delete nextState[action.todo.id];
          return nextState;
        default:
            return state;
  }
};

export default todosReducer;