import { setFilters } from './actions';

export default {
  [setFilters]: (state, { payload }) => ({
    ...state,
    filters: payload
  }),
};
