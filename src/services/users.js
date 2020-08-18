import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

export const API = setup({
  baseURL: process.env.REACT_APP_CARTO_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  cache: {
    // ignoreCache: process.env.NODE_ENV === 'development',
    maxAge: 15 * 60 * 1000,
    exclude: { query: false },
  }
});

export const fetchUser = (email, password) => {
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;

  return API.get(`sql?q=SELECT * FROM users WHERE email='${email}'&api_key=${api_key}`)
  .then(({ data }) => data.rows[0])
  .catch((e) => {
   // const { status, statusText } = response;
    console.log(e)
  });
};
