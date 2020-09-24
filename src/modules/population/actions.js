import { createAction } from 'vizzuality-redux-tools';

export const setFilters = createAction('POPULATIONS/SET_FILTERS');
export const setPopulations = createAction('POPULATIONS/SET_POPULATIONS');
export const setPopulationsByLocation = createAction('POPULATIONS/SET_POPULATIONS_BY_LOCATION');
export const resetPopulationsByLocation = createAction('POPULATIONS/RESET_POPULATIONS_BY_LOCATION');
export const setPublications = createAction('POPULATIONS/SET_PUBLICATIONS');
export const setSearch = createAction('POPULATIONS/SET_SEARCH');
export const setCurrent = createAction('POPULATIONS/SET_CURRENT');


