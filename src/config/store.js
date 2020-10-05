import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import router from './router';
import { handleModule } from 'vizzuality-redux-tools';

import * as map from 'modules/map';
import * as population from 'modules/explore';
import * as user from 'modules/user';
import * as analysis from 'modules/analysis';

const {
  initialDispatch,
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = router;

const reducers = combineReducers({
  router: routerReducer,
  map: handleModule(map),
  population: handleModule(population),
  user: handleModule(user),
  analysis: handleModule(analysis),
});

const middleware = applyMiddleware(routerMiddleware);
const enhancers = composeWithDevTools(routerEnhancer, middleware);

const store = createStore(reducers, enhancers);

initialDispatch();

export default store;
