import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'wpe-comments',
});

export const API = setup({
  baseURL: process.env.REACT_APP_CARTO_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  cache: {
    // ignoreCache: process.env.NODE_ENV === 'development',
    maxAge: 15 * 60 * 1000,
    exclude: { query: false },
    store,
  },
});

export const fetchComments = (publication_id, population_id, size_id, trend_id, onepercet_id) => {
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;
  const q = `SELECT * FROM comments
    WHERE publication_id = ${publication_id}
    AND population_id = ${population_id}
    ${size_id ? `AND size_id = ${size_id}` : ''}
    ${trend_id ? `AND trend_id = ${trend_id}` : ''}
    ${onepercet_id ? `AND onepercent_id = ${onepercet_id}` : ''}`;

  return API.post(`sql?q=${encodeURIComponent(q)}&api_key=${api_key}`)
    .then(({ data }) => data.rows)
    .catch((e) => {
      console.log(e);
    });
};

export const createComment = ({
  name,
  user_id,
  publication_id,
  population_id,
  size_id,
  trend_id,
  onepercent_id,
  comment,
  date,
}) => {
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;
  const idType =
    (size_id && 'size_id') || (trend_id && 'trend_id') || (onepercent_id && 'onepercent_id');
  const Id = size_id || trend_id || onepercent_id;

  const q = `INSERT INTO comments (
    name,
    user_id,
    publication_id,
    population_id,
    ${idType},
    comment,
    date
  ) VALUES (
    '${name}',
    '${user_id}',
    '${publication_id}',
    '${population_id}',
    '${Id}',
    '${comment}',
    '${date}'
  )`;
  return API.post(`sql?q=${encodeURIComponent(q)}&api_key=${api_key}`);
};

export const deleteComment = (params = {}, headers = {}) => {
  return API.delete('sql', { params }, { headers })
    .then((response) => console.log(response))
    .catch((e) => {
      console.log(e);
    });
};

export const updateComment = (column_to_update, update, condition) => {
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;
  const q = `UPDATE comments SET ${column_to_update} = '${update}' WHERE ${condition}`;

  return API.post(`sql?q=${encodeURIComponent(q)}&api_key=${api_key}`);
};
