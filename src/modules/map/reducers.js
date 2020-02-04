import { fetchRequested, fetchSucceeded, fetchFailed, setBasemap } from './actions';

export default {
  [fetchRequested]: state => ({
    ...state,
    layers: {
      isLoading: true,
      error: null
    }
  }),
  [fetchSucceeded]: (state, { payload }) => ({
    ...state,
    layers: {
      ...state.layers,
      isLoading: false,
      mapStyle: payload
    }
  }),
  [fetchFailed]: (state, { payload }) => ({
    ...state,
    layers: {
      ...state.layers,
      isLoading: false,
      error: payload
    }
  }),
  [setBasemap]: (state, { payload }) => ({
    ...state,
    basemap: payload
  })
};
