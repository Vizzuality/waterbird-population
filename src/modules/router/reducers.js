import { initialState } from './initialState';
import { combineReducers } from 'redux';


import { NONSENSE_ACTION } from './actions';


const router = function location(state = initialState, action) {
  switch (action.type) {
  case NONSENSE_ACTION:
    return {
      pathname: 'jdajasj'
    }


  default:
    return state;
  }
}

export default router;

