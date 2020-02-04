
import { createAction } from 'vizzuality-redux-tools';

export const fetchRequested = createAction('MAP/FETCH_REQUESTED');
export const fetchSucceeded = createAction('MAP/FETCH_SUCCEEDED');
export const fetchFailed = createAction('MAP/FETCH_AFAILED');
export const setBasemap = createAction('MAP/SET_BASEMAP');

export default {
  fetchRequested,
  fetchSucceeded,
  fetchFailed,
  setBasemap
};
