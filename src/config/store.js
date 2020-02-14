import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
<<<<<<< HEAD

=======
>>>>>>> 290dd6ed8184f43f26c1e68c8b8f29454ea76c71
import router from './router';

const {
  initialDispatch,
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = router;

const reducers = combineReducers({
  router: routerReducer
});

const middleware = applyMiddleware(routerMiddleware);
const enhancers = composeWithDevTools(routerEnhancer, middleware);

const store = createStore(reducers, enhancers);

initialDispatch();

export default store;
