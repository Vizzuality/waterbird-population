import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE
  ],
  name: 'wpe-populations'
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

export const fetchPopulations = (specieid) => {
  // FROM populationname n JOIN populationsize s ON n.id = s.population_id WHERE species_id = '${specieid}'`;
  const q = `SELECT
    populationname,
    breedingrange,
    nonbreedingrange,
    n.id,
    species_id,
    s.startyear,
    s.endyear,
    s.minimum,
    s.maximum,
    s.notes,
    s.population_id,
    o.yearset,
    o.onepercent,
    o.populationid,
    t.startyear,
    t.endyear,
    t.trend_id,
    t.trendquality_id,
    q.description,
    trend.trendcode,
    trend.trendsum
  FROM populationname n
  LEFT JOIN populationsize s ON n.id = s.population_id
  LEFT JOIN populationonepercentlevel o ON n.id = o.populationid
  LEFT JOIN populationtrend t ON n.id = t.population_id
  LEFT JOIN trend trend ON trend.id = t.trend_id
  LEFT JOIN qualitycodetrend q ON q.id = t.trend_id
  WHERE species_id = '${specieid}'`;
  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
  .then(({ data }) => data.rows.map((pop) =>
    {
      return {
        'info': {
          'population_name': pop.populationname || '',
          'breeding_range': pop.breedingrange || '',
          'non-breeding_range': pop.nonbreedingrange || '',
        },
        'size': {
          'start_year': pop.startyear || '',
          'end_year': pop.endyear || '',
          'minimum': pop.minimum || '',
          'maximun': pop.maximum || '',
          'notes': pop.notes || '',
        },
        'trends': {
          'start_year': pop.startyear || '',
          'end_year': pop.endyear || '',
          'trend': pop.trendcode || '',
          'trend_quality': pop.description || '',
        },
        'percent': {
          'yearset': pop.yearset || '',
          'percent': pop.onepercent || '',
        }

    }})
  )
  .catch((e) => {
    console.log(e, 'error')
  });
};


export const fetchPopulationSize = (populationId) => {
  const q = `SELECT
  startyear,
  endyear,
  minimum,
  maximum,
  notes
  FROM populationsize WHERE population_id = '${populationId}'`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
  .then(({ data }) => data.rows)
  .catch((e) => {
    console.log(e, 'error')
  });
};
