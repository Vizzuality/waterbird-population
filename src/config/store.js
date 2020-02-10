import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import * as pages from 'modules/pages';
import { handleModule } from 'vizzuality-redux-tools';


import router from './router';

const {
  initialDispatch,
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = router;

const reducers = combineReducers({
  router: routerReducer,
  pages: handleModule(pages)
});

const middleware = applyMiddleware(routerMiddleware);
const enhancers = composeWithDevTools(routerEnhancer, middleware);

const store = createStore(reducers, enhancers);

initialDispatch();

export default store;
