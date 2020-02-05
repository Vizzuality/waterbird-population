
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { handleModule } from 'vizzuality-redux-tools';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import * as app from 'modules/app';
// import { connectRoutes } from 'redux-first-router';
// import * as actionCreators from 'modules/app/actions';
// import rootReducer from 'modules/reducers';
// import createBrowserHistory from 'history/createBrowserHistory'
import router from './router';


const modules = [
  { name: 'app', components: app }
];


const {
  initialDispatch,
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = router;

const reducers = combineReducers({
  router: routerReducer,
  // ...modules.reduce(
  //   (acc, module) => ({ ...acc, [module.name]: handleModule(module.components) }),
  //   {}
  // )
});

const middleware = applyMiddleware(routerMiddleware);
const enhancers = composeWithDevTools(routerEnhancer, middleware);

const store = createStore(reducers, enhancers);

// sagaMiddleware.run(sagas);
initialDispatch();

export default store;
