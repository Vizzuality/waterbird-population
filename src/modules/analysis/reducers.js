import {
  fetchData,
  setPopulations,
  setTrends,
  setTrendCategories,
  setFilters,
  resetFilters,
} from './actions';
import initialState from './initial-state';

export default {
  [fetchData]: (state, { payload }) => ({
    ...state,
    widgetsData: payload,
  }),
  [setPopulations]: (state, { payload }) => ({
    ...state,
    populations: {
      data: payload?.data,
      loading: !payload?.status === 200,
    },
  }),
  [setTrends]: (state, { payload }) => ({
    ...state,
    trends: {
      data: payload?.data,
      loading: !payload?.status === 200,
    },
  }),
  [setTrendCategories]: (state, { payload }) => ({
    ...state,
    trend_categories: {
      data: payload?.data,
      loading: !payload?.status === 200,
    },
  }),
  [setFilters]: (state, { payload }) => ({
    ...state,
    filters: payload,
  }),
  [resetFilters]: (state) => ({
    ...state,
    filters: initialState.filters,
  }),
};
