import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'wpe-references',
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

export const fetchReferences = () => {
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;
  const q = `SELECT id, body, notes FROM reference`;
  return API.get(`sql?q=${encodeURIComponent(q)}&api_key=${api_key}`)
    .then(({ data, status }) => {
      return { data: data.rows, status };
    })
    .catch((e) => {
      // const { status, statusText } = response;
      console.log(e);
    });
};

export const fetchReferencesToDownload = () => {
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;
  const q = `SELECT body, notes FROM reference`;
  return API.get(`sql?q=${encodeURIComponent(q)}&api_key=${api_key}`)
    .then(({ data }) => data.rows)
    .catch((e) => {
      console.log(e);
    });
};
