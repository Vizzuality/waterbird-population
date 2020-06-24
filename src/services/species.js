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

export const fetchSpecies = (familyId) => {
  const q = `
  SELECT s.id AS specieid,commonname,scientificname,familyenglish,iucn_id,r.description,r.iucn,r.id
  FROM species_1 s
  LEFT JOIN redlistcategory r
  ON s.iucn_id = r.id
  WHERE familyname_id = '${familyId}'
 `;
  const api_key = `${process.env.REACT_APP_CARTO_API_TOKEN}`;

  return API.get(`sql?q=${q}&api_key=${api_key}`)
  .then(data => data)
  .catch((e) => {
   // const { status, statusText } = response;
    console.log(e)
  });
};
