import { setFilters, setPopulations, setCurrent, setSearch } from './actions';

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
  [setSearch]: (state, { payload }) => ({
    ...state,
    search: payload
  }),
};
