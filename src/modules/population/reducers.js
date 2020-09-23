import { setFilters, resetFilters, setPopulations, setPublications, setCurrent, setSearch } from './actions';
import initialState from "./initial-state";

export default {
  [setFilters]: (state, { payload }) => ({
    ...state,
    filters: payload
  }),
  [resetFilters]: (state) => ({
    ...state,
    filters: initialState.filters
  }),
  [setPopulations]: (state, { payload }) => ({
    ...state,
    data: payload.data,
    loading: !payload.status === 200
  }),
  [setPublications]: (state, { payload }) => ({
    ...state,
    publications: payload
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
