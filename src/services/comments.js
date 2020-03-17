import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE
  ],
  name: 'wpe-comments'
});

export const API = setup({
  baseURL: process.env.REACT_APP_CARTO_ACCOUNT,
  headers: { 'Content-Type': 'application/json' },
  cache: {
    // ignoreCache: process.env.NODE_ENV === 'development',
    maxAge: 15 * 60 * 1000,
    exclude: { query: false },
    store
  }
});

export const fetchComments = (params = {}, headers = {}) => {
  return API.get('sql', { params }, headers)
    .then(response => console.log(response))
    .catch((e) => {
      console.log(e)
    });
};

export const createComments = (params = {}, headers = {}) => {
  return API.post('sql', { params }, { headers })
    .then(response => console.log(response))
    .catch((e) => {
      console.log(e)
    });
};

export const deleteComment = (params = {}, headers = {}) => {
  return API.delete('sql', { params }, { headers })
    .then(response => console.log(response))
    .catch((e) => {
      console.log(e)
    });
};

export const updateComment = (params = {}, headers = {}) => {
  return API.patch('sql', { params }, { headers })
    .then(response => console.log(response))
    .catch((e) => {
      console.log(e)
    });
};
