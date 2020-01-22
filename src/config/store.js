

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { handleModule } from 'vizzuality-redux-tools';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import * as app from 'modules/app';
import * as router from 'modules/router';
// import { connectRoutes } from 'redux-first-router';
// import * as actionCreators from 'modules/app/actions';
// import rootReducer from 'modules/reducers';
// import createBrowserHistory from 'history/createBrowserHistory'
import routesMap from './router';
import sagas from './sagas';


const modules = [
  { name: 'app', components: app },
  { name: 'router', components: router },
];


const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = routesMap;


const reducers = combineReducers({
  router: routerReducer,
  ...modules.reduce(
    (acc, module) => ({ ...acc, [module.namespace]: handleModule(module.components) }),
    {}
  )
});

const middleware = applyMiddleware(routerMiddleware);
const enhancers = composeWithDevTools(routerEnhancer, middleware);

console.log(reducers, '***************')
console.log(enhancers, '¨¨¨¨¨¨¨¨¨¨¨¨')

debugger
const store = createStore(reducers, enhancers);

const sagaMiddleware = createSagaMiddleware();



sagaMiddleware.run(sagas);
export default store;
