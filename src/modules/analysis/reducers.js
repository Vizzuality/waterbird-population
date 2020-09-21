import { fetchData, setTrends, setTrendCategories, setFilters } from './actions';

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
  }),
  [setFilters]: (state, { payload }) => ({
    ...state,
    filters: payload
  })
};
