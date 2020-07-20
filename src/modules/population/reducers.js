import { setFilters, setPopulations } from './actions';

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
};
