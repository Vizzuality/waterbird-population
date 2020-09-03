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
  return API.get(`php?action=query&prop=pageimages&titles=${name}&pithumbsize=100&format=json`)
  .then((data) => console.log(data))
  .catch((e) => {
    console.log(e, 'error')
  });
};
