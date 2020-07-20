import { setBasemap, setLocation, setPopUp } from './actions';

export default {
  [setBasemap]: (state, { payload }) => ({
    ...state,
    selectedBasemap: payload
  }),
  [setLocation]: (state, { payload }) => ({
    ...state,
    lonLat: payload
  }),
  [setPopUp]: (state, { payload }) => ({
    ...state,
    popUp: payload
  }),
};
