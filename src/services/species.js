import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';
import queryString from 'query-string';
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

export const fetchSpecies = (familyName) => {
  const q = `
  SELECT english_name,scientific_name,french_name,family,iucn_category,r.description,r.iucn
  FROM species s
  JOIN redlistcategory r
  ON s.iucn_category = TRIM(r.iucn)
  WHERE family = '${familyName}'
 `;
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;

  return API.get(`sql?q=${q}&api_key=${api_key}`)
  .then(data => data)
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
