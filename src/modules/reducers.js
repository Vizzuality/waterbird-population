import { combineReducers } from 'redux';

// Reducers
import * as app from 'modules/app/reducers';
import * as router from 'modules/router/reducers';

const rootReducer = combineReducers({
  app: app,
  router: router
});

export default rootReducer;

