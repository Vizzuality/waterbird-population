import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'wpe-conservation',
});

export const API = setup({
  baseURL: process.env.REACT_APP_CARTO_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  cache: {
    // ignoreCache: process.env.NODE_ENV === 'development',
    maxAge: 15 * 60 * 1000,
    exclude: { query: false },
    store,
  },
});

export const fetchConservationFrameworks = () => {
  const q = `SELECT id,code,description FROM protection`;

  return API.get(`sql?q=${encodeURIComponent(q)}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
    .then(({ data }) => data.rows)
    .catch((e) => {
      console.log(e, 'error');
    });
};
