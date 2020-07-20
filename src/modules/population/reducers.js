import { setFilters, setPopulations, setCurrent } from './actions';

export default {
  [setFilters]: (state, { payload }) => ({
    ...state,
    filters: payload
  }),
  [setPopulations]: (state, { payload }) => ({
    ...state,
    populations: {
      ...state.populations,
      [payload.id]: payload.data
    }
  }),
  [setCurrent]: (state, { payload }) => ({
    ...state,
    populations: {
      ...state.populations,
      current: payload
    }
  }),
};
