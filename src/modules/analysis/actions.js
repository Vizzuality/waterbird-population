import { createAction } from 'vizzuality-redux-tools';

export const fetchData = createAction('ANALYSIS/FETCH_WIDGET_DATA');
export const setTrends = createAction('ANALYSIS/SET_TRENDS');
export const setTrendCategories = createAction('ANALYSIS/SET_TREND_CATEGORIES');
export const setFilters = createAction('ANALYSIS/SET_FILTERS');
