import { setFilters, setPopulations, setCurrent } from './actions';

export default {
  [setFilters]: (state, { payload }) => ({
    ...state,
    filters: payload
  }),
  [setPopulations]: (state, { payload }) => ({
    ...state,
    data: {
      ...state.populations,
      [payload.id]: payload.data
    }
  }),
  [setCurrent]: (state, { payload }) => ({
    ...state,
    current: payload
  }),
};
