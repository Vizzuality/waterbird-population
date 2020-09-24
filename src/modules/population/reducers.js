import {
  setFilters,
  setPopulations,
  setPopulationsByLocation,
  resetPopulationsByLocation,
  setPublications,
  setCurrent,
  setSearch
} from './actions';

import initialState from './initial-state';

export default {
  [setFilters]: (state, { payload }) => ({
    ...state,
    filters: payload
  }),
  [setPopulations]: (state, { payload }) => ({
    ...state,
    data: payload.data,
    loading: !payload.status === 200
  }),
  [setPopulationsByLocation]: (state, { payload }) =>
  ({
    ...state,
    populationsByLocation: {
      data: payload.data,
      loading: !payload.status === 200
    }
  }),
  [resetPopulationsByLocation]: (state) =>
  ({
    ...state,
    populationsByLocation: ({ ...state }, initialState.populationsByLocation)
  }),
  [setPublications]: (state, { payload }) => ({
    ...state,
    publications: payload
  }),
  [setCurrent]: (state, { payload }) => ({
    ...state,
    current: payload
  }),
  [setSearch]: (state, { payload }) => ({
    ...state,
    search: payload
  }),
};
