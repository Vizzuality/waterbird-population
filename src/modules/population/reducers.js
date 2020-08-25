import { setFilters, setPopulations, setCurrent } from './actions';

export default {
  [setFilters]: (state, { payload }) => ({
    ...state,
    filters: payload
  }),
  [setPopulations]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [setCurrent]: (state, { payload }) => ({
    ...state,
    current: payload
  }),
};
