import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE
  ],
  name: 'wpe-flyways'
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

export const fetchFlyways = () => {

  const q = `SELECT id, flywayrange, TRIM(flywaygroup) as flywaygroup FROM flyway`;

  return API.get(`sql?q=${encodeURIComponent(q)}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
  .then(({ data }) => data.rows)
  .catch((e) => {
    console.log(e, 'error')
  });
};


