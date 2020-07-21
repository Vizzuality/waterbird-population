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
  const q = `with population_data as (SELECT
    n.populationname as name,
    n.breedingrange,
    n.nonbreedingrange,
    n.id,
    n.species_id,

    s.id AS population_size_id,
    s.startyear AS population_size_startyear,
    s.endyear AS population_size_endyear,
    s.minimum AS population_size_minimum,
    s.maximum AS population_size_maximum,
    s.notes AS population_size_notes,
    s.population_id AS population_population_size_id,

    o.id as populationonepercentlevel_id,
    o.yearset as populationonepercentlevel_yearset,
    o.onepercent as populationonepercentlevel_onepercent,
    o.populationid as populationonepercentlevel_population_id,

    p.population_id,
    p.publication_id,

    pub.id as pub_id,
    pub.published as pub_published,
    pub.description AS pub_description,

    t.trend_id as population_trend_id,
    t.trendquality_id as population_trend_trendquality_id,
    t.startyear as population_trend_startyear,
    t.endyear as population_trend_endyear,

    q.description as qualitycodetrend_description,

    trend.trendcode as trend_code,
    trend.trendsum as trend_sum
  FROM populationname n
  LEFT JOIN populationsize s ON n.id = s.population_id
  LEFT JOIN populationonepercentlevel o ON n.id = o.populationid
  LEFT JOIN populationtrend t ON n.id = t.population_id
  LEFT JOIN populationpublication p ON p.population_id = s.population_id
  LEFT JOIN publication pub ON pub.id = p.publication_id
  LEFT JOIN trend trend ON trend.id = t.trend_id
  LEFT JOIN qualitycodetrend q ON q.id = t.trendquality_id)

  select
    id,
    name,
    breedingrange,
    nonbreedingrange,
    species_id,

    jsonb_agg(distinct jsonb_build_object(
      'id', population_size_id,
      'publication_id', publication_id,
      'maximum',  population_size_maximum,
      'minimum',  population_size_minimum,
      'startyear', population_size_startyear,
      'endyear', population_size_endyear
    ))
    as sizes,

    jsonb_agg(distinct jsonb_build_object(
      'id', populationonepercentlevel_id,
      'yearset', populationonepercentlevel_yearset,
      'onepercent', populationonepercentlevel_onepercent,
      'population_id', populationonepercentlevel_population_id
    ))
    as populationonepercentlevel,

    jsonb_agg(distinct jsonb_build_object(
      'id', pub_id,
      'name', pub_description,
      'published', pub_published
    ))
    as publications,

    jsonb_agg(distinct jsonb_build_object(
      'id', population_trend_id,
      'publication_id', publication_id,
      'quality_id', population_trend_trendquality_id,
      'name', trend_code,
      'state', trend_sum,
      'quality', qualitycodetrend_description,
      'startyear', population_trend_startyear,
      'endyear', population_trend_endyear
    ))
    as trends


    from population_data where species_id=${specieid} group by id, name, breedingrange, nonbreedingrange, species_id`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
    .then(({ data }) => console.log(data.rows, 'servicio')|| data.rows)
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
