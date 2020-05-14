import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';
import * as species from 'services/species';

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

export const fetchSpecies = () => {

  const q = `SELECT id FROM species_1`;
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;

  return API.get(`sql?q=${q}&api_key=${api_key}`)
  .then(data => console.log(data))
  .catch((e) => {
   // const { status, statusText } = response;
    console.log(e)
  });
};

// export const fetchCountries = () => {
//   const query = `
//     SELECT country,
//       country_iso as iso
//     FROM ${process.env.REACT_APP_DATA_TABLENAME}
//     GROUP BY country, country_iso
//     ORDER BY country
//   `;

//   return cartoApi(query);
// };
