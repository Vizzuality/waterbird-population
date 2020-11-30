import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE
  ],
  name: 'wpe-species'
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

export const API_images = setup({
  baseURL: 'https://species.wikimedia.org/w/',
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

export const fetchImages = (name) => {

  return API_images.get(`api.php?action=query&origin=*&prop=description|pageimages&titles=${name}&pithumbsize=200&format=json`)
  .then(({ data }) => Object.values(data.query.pages)[0])
  .catch((e) => {
    console.log(e, 'error')
  });
};
