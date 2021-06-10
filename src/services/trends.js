import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE
  ],
  name: 'wpe-trends'
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

export const fetchTrends = () => {
  const q = `with population_data as (SELECT
    n.populationname as name,
    n.breedingrange,
    n.nonbreedingrange,
    n.id,
    n.species_id,
    n.africa,
    n.asia,
    n.europe,
    n.neotropics,
    n.northamerica,
    n.oceania,
    fo.id AS familyorder_id,
    fo.name AS familyorder_name,
    f.id AS family_id,
    f.name AS family_name,
    sp.id AS specie_id,
    sp.commonname AS specie_commonname,
    sp.scientificname AS specie_scientificname,
    t.trend_id as population_trend_id,
    t.trendquality_id as population_trend_trendquality_id,
    trend.trendcode as trend_code,
    trend.trendsum as trend_sum,
    fly.id as flyway_id,
    fly.flywayrange as flyway_range,
    fly.flywaygroup as flyway_group
  FROM populationname n
  LEFT JOIN populationpublication p ON p.population_id = n.id
  LEFT JOIN species_1 sp ON n.species_id = sp.id
  LEFT JOIN family f ON f.id = sp.familyname_id
  LEFT JOIN familyorder fo ON fo.id = f.grouping_id
  LEFT JOIN populationtrend t ON p.populationtrend_id = t.id
  LEFT JOIN trend trend ON trend.id = t.trend_id
  LEFT JOIN qualitycodetrend q ON q.id = t.trendquality_id
  LEFT JOIN flyway fly ON fly.id = n.flyway_id)
  select
    id,
    name,
    species_id,
    jsonb_build_object(
      'id', family_id,
      'name', family_name,
      'ordername', familyorder_name
    )
    as family,
    jsonb_agg(distinct jsonb_build_object(
      'id', population_trend_id,
      'quality_id', population_trend_trendquality_id,
      'name', trend_code,
      'state', trend_sum
    ))
    as trends,
    jsonb_agg(distinct jsonb_build_object(
      'id', flyway_id,
      'range', flyway_range,
      'flywaygroup', flyway_group
    ))
    as flyways
    from population_data
    group by
    id,
    name,
    species_id,
    specie_id,
    specie_commonname,
    specie_scientificname,
    family_id,
    family_name,
    familyorder_name`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
    .then(({ data, status }) => { return { data: data.rows, status }})
    .catch((e) => {
      console.log(e, 'error')
    });
};

export const fetchTrendCategories = () => {
  const q = `SELECT DISTINCT trendsum FROM trend`;
  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
  .then(({ data, status }) => {
    return {
      data: data.rows.map(d => d.trendsum.trim()), status
    }})
  .catch((e) => {
    console.log(e, 'error')
  });
};

