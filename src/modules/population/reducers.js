import {
  setFilters,
  setPopulations,
  setPopulationsByLocation,
  setPublications,
  setCurrent,
  setSearch
} from './actions';

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
  [setPopulationsByLocation]: (state, { payload }) => console.log(payload)||
  ({
    ...state,
    populationsByLocation: {
      data: payload.data,
      loading: !payload.status === 200
    }
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
