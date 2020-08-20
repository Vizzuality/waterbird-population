import { setup } from 'axios-cache-adapter';

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

  return API.get(`sql?q=SELECT * FROM users WHERE email='${email}' AND password='${password}'&api_key=${api_key}`)
  .then(({ data }) => data.rows[0])
  .catch((e) => {
   // const { status, statusText } = response;
    console.log(e)
  });
};


export const registerUser = (data) => {
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;

  const q = `INSERT INTO users (
    name,
    email,
    company,
    phone,
    comments
  )
  VALUES (
    '${data.name}',
    '${data.email}',
    '${data.company}',
    '${data.phone}',
    '${data.comments}'
  ) `
  return API.post(`sql?q=${q}&api_key=${api_key}`)
};
