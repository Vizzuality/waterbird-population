import { setBasemap } from './actions';

export default {
  [setBasemap]: (state, { payload }) => ({
    ...state,
    selectedBasemap: payload
  })
};