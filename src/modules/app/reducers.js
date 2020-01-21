import { NONSENSE_ACTION, SECOND_ACTION } from './actions';
import { combineReducers } from 'redux';


const initialState = [{
  text: 'App initial state',
  modified: new Date()
}];

const app = function location(state = initialState, action) {
  switch (action.type) {
  case NONSENSE_ACTION:
    return state.map(todo =>
      todo.id === action.id ?
        Object.assign({}, todo, { text: action.text, modified: new Date() }) :
        todo
    );

  case SECOND_ACTION:
    return state.map(todo =>
      todo.id === action.id ?
        Object.assign({}, todo, { completed: !todo.completed, modified: new Date() }) :
        todo
    );

  default:
    return state;
  }
}

export default app;

