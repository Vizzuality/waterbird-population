import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE
  ],
  name: 'wpe-populations'
});

export const API = setup({
  baseURL: process.env.REACT_APP_CARTO_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  cache: {
    // ignoreCache: process.env.NODE_ENV === 'development',
    maxAge: 15 * 60 * 1000,
    exclude: { query: false },
    store
  }
});

export const fetchPopulations = (specieid) => {
  // FROM populationname n JOIN populationsize s ON n.id = s.population_id WHERE species_id = '${specieid}'`;
  const q = `SELECT * FROM populations_all_data  ${specieid ? `where species_id=${specieid}` : ''}`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
    .then(({ data }) => data.rows)
    .catch((e) => {
      console.log(e, 'error')
    });
};

export const fetchDataToDownload = (specieid) => {
  const q = `SELECT * FROM populations_all_data  ${specieid ? `where species_id=${specieid}` : ''}`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}&format=csv`)
    .then(({ data }) => data)
};
