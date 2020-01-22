import { nonsenseAction, secondAction } from './actions';

export default {
  [nonsenseAction]: (state, { payload }) => ({
    ...state,
    router: {
      ...state.router,
      current: payload
    }
  }),
  [secondAction]: (state, { payload }) => ({
    ...state,
    router: {
      ...state.router,
      pathname: payload
    }
  }),
}

