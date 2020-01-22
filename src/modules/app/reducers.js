// import { NONSENSE_ACTION, SECOND_ACTION } from './actions';
// import { combineReducers } from 'redux';


// import { setMobileView } from './actions';

// export default {
//   [setMobileView]: (state, { payload }) => ({
//     ...state,
//     mobile: {
//       ...state.mobile,
//       mapView: payload
//     }
//   })
// };

import { nonsenseAction, secondAction } from './actions';

export default {
  [nonsenseAction]: (state, { payload }) => ({
    ...state,
    app: {
      ...state.app,
      nonsense: payload
    }
  }),
  [secondAction]: (state, { payload }) => ({
    ...state,
    app: {
      ...state.app,
      second: payload
    }
  }),

}

// const initialState = [{
//   text: 'App initial state',
//   modified: new Date()
// }];

// const app = function location(state = initialState, action) {
//   switch (action.type) {
//   case NONSENSE_ACTION:
//     return state.map(todo =>
//       todo.id === action.id ?
//         Object.assign({}, todo, { text: action.text, modified: new Date() }) :
//         todo
//     );

//   case SECOND_ACTION:
//     return state.map(todo =>
//       todo.id === action.id ?
//         Object.assign({}, todo, { completed: !todo.completed, modified: new Date() }) :
//         todo
//     );

//   default:
//     return state;
//   }
// }

// export default app;

