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
  const q = `select
  id,
  name,
  breedingrange,
  nonbreedingrange,
  species_id,
  asia,
  africa,
  europe,
  neotropics,
  northamerica,
  oceania,
  jsonb_build_object(
    'id', family_id,
    'name', family_name,
    'ordername', familyorder_name
  )
  as family,
  jsonb_build_object(
    'id', specie_id,
    'commonname', specie_commonname,
    'scientificname', specie_scientificname,
    'redlistcategory', redlistcategory_name
  )
  as specie,
  jsonb_agg(distinct jsonb_build_object(
    'id', populationsize_id,
    'publication_id', publication_id,
    'maximum',  population_size_maximum,
    'minimum',  population_size_minimum,
    'startyear', population_size_startyear,
    'endyear', population_size_endyear,
    'quality', population_size_estimate_quality,
    'notes', population_size_notes
  ))
  as sizes,
  jsonb_agg(distinct jsonb_build_object(
    'id', populationonepercentlevel_id,
    'yearset', populationonepercentlevel_yearset,
    'onepercent', populationonepercentlevel_onepercent,
    'note', populationonepercentlevel_note,
    'population_id', id,
    'publication_id', publication_id
  ))
  as populationonepercentlevel,
  jsonb_agg(distinct jsonb_build_object(
    'id', publication_id,
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
    'endyear', population_trend_endyear,
    'notes', population_trend_notes
  ))
  as trends,
  jsonb_agg(distinct jsonb_build_object(
    'id', population_protection_id,
    'conservation_framework', population_conservation_framework,
    'info', population_conservation_framework_info
  ))
  as conservation,
  jsonb_agg(distinct jsonb_build_object(
    'id', flyway_id,
    'range', flyway_range,
    'flywaygroup', flyway_group
  ))
  as flyways
  from population_all_data ${specieid ? `where species_id=${specieid}` : ''}
  group by
  id,
  name,
  breedingrange,
  nonbreedingrange,
  asia,
  africa,
  europe,
  neotropics,
  northamerica,
  oceania,
  species_id,
  specie_id,
  specie_commonname,
  specie_scientificname,
  family_id,
  family_name,
  familyorder_name,
  redlistcategory_name,
  redlistcategory_id`

  return API.get(`sql?q=${encodeURIComponent(q)}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
    .then(({ data, status }) => { return { data: data.rows, status }})
    .catch((e) => {
      console.log(e, 'error')
    });
};

export const fetchDataToDownload = (specieid) => {
  const q = `SELECT
    populationname,
    breedingrange,
    nonbreedingrange,
    n.id,
    species_id,
    s.id AS population_size_id,
    s.startyear,
    s.endyear,
    s.minimum,
    s.maximum,
    s.notes,
    s.population_id,
    o.yearset,
    o.onepercent,
    o.populationid,
    p.publication_id,
    pub.description AS pub_description,
    pub.published,
    t.startyear AS trend_start_year,
    t.endyear AS trend_end_year,
    t.trend_id,
    t.trendquality_id,
    q.description,
    trend.trendcode,
    trend.trendsum
  FROM populationname n
  LEFT JOIN populationsize s ON n.id = s.population_id
  LEFT JOIN populationonepercentlevel o ON n.id = o.populationid
  LEFT JOIN populationtrend t ON n.id = t.population_id
  LEFT JOIN populationpublication p ON p.population_id = s.population_id
  LEFT JOIN publication pub ON pub.id = p.publication_id
  LEFT JOIN trend trend ON trend.id = t.trend_id
  LEFT JOIN qualitycodetrend q ON q.id = t.trend_id
   ${specieid ? `where species_id=${specieid}` : ''}`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}&format=csv`)
    .then(({ data }) => data)
};

export const fetchPopulationsByLocation = (lng,lat) => {
  const q = `SELECT commonname,
    flywaygroup,
    flywayrange,
    populationname,
    scientificname,
    wpepopid FROM species_and_flywaygroups WHERE
  ST_Intersects(
             ST_SetSRID(
                ST_MakePoint(${lng},${lat}),4326),the_geom)`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
    .then(({ data, status }) => { return { data: data.rows, status }})
};
