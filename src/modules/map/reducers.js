import { setBasemap, setLocation, resetLocation, setPopUp } from './actions';

import initialState from './initial-state';

export default {
  [setBasemap]: (state, { payload }) => ({
    ...state,
    selectedBasemap: payload
  }),
  [setLocation]: (state, { payload }) => ({
    ...state,
    lonLat: payload
  }),
  [resetLocation]: (state) =>
  ({
    ...state,
    lonLat: ({ ...state }, initialState.populationsByLocation)
  }),
  [setPopUp]: (state, { payload }) => ({
    ...state,
    popUp: payload
  }),
};
