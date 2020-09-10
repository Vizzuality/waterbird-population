import { fetchData, setTrends, setTrendCategories } from './actions';

export default {
  [fetchData]: (state, { payload }) => ({
    ...state,
    widgetsData: payload
  }),
  [setTrends]: (state, { payload }) => ({
    ...state,
    trends: payload
  }),
  [setTrendCategories]: (state, { payload }) => ({
    ...state,
    trend_categories: payload
  })
};
