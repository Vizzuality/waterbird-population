import { setFilters, resetFilters } from './actions';
import initialState from "./initial-state";

export default {
  [setFilters]: (state, { payload }) => ({
    ...state,
    filters: {
      ...state.filters,
      [payload.id]: payload.value

    }
  }),
  [resetFilters]: state => ({ ...state }, initialState),
};
