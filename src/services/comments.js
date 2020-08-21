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
  baseURL: process.env.REACT_APP_CARTO_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  cache: {
    // ignoreCache: process.env.NODE_ENV === 'development',
    maxAge: 15 * 60 * 1000,
    exclude: { query: false },
    store
  }
});

export const fetchComments = (id) => {
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;
  const q = `SELECT * FROM comments WHERE publication_id = ${id}`

  return API.post(`sql?q=${q}&api_key=${api_key}`)
    .then(({ data }) => data.rows)
    .catch((e) => {
      console.log(e)
    });
};

export const createComment = ({
  name,
  user_id,
  publication_id,
  comment,
  date
}) => {
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;

  const q = `INSERT INTO comments (
    name,
    user_id,
    publication_id,
    comment,
    date
  ) VALUES (
    '${name}',
    '${user_id}',
    '${publication_id}',
    '${comment}',
    '${date}'
  )`
  return API.post(`sql?q=${q}&api_key=${api_key}`)
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

