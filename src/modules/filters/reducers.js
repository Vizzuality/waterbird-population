import { setFilters, resetFilters } from './actions';
import initialState from "./initial-state";

export default {
  [setFilters]: (state, { payload }) => ({
    ...state,
    filters: payload
  }),
  [resetFilters]: state => ({ ...state }, initialState),
};
