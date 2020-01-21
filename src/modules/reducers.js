import { combineReducers } from 'redux';

// Reducers
import app from 'modules/app/reducers';
import router from 'modules/router/reducers';


const rootReducer = combineReducers({
  app: app,
  router: router,
  location: router.reducer
});

export default rootReducer;

