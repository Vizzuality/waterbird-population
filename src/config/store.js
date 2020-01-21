

import { createStore, applyMiddleware, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';
import * as actionCreators from 'modules/app/actions';
import rootReducer from 'modules/reducers';
import createBrowserHistory from 'history/createBrowserHistory'
import routesMap from './router';



export default function configureStore(preloadedState) {

  const history = createBrowserHistory()
  const { enhancer, middleware, reducer } = connectRoutes(history, {
    routesMap
  })

  const enhancerConf = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators, serialize: true, trace: true });
    console.log(enhancer, 'enhancer')
  if (!enhancer) {
    console.warn('Install Redux DevTools Extension to inspect the app state: ' +
      'https://github.com/zalmoxisus/redux-devtools-extension#installation')
  }

  // const store = createStore(rootReducer, compose(enhancer, applyMiddleware(middleware)))
  const store = createStore(rootReducer, preloadedState, enhancerConf);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('modules/reducers', () => {
      store.replaceReducer(require('modules/reducers').default)
    });
  }

  return store;
}
