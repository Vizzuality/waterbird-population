import { fetchData } from './actions';

export default {
  [fetchData]: (state, { payload }) => ({
    ...state,
    widgetsData: payload
  })
};
