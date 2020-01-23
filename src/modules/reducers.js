import { combineReducers } from 'redux';

// Reducers
import * as app from 'modules/app/reducers';

const rootReducer = combineReducers({
  app
});

export default rootReducer;

