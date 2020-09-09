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
    'notes', population_size_notes,
    'references', population_size_reference
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
    'notes', population_trend_notes,
    'references', reference
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
    .then(({ data }) => data.rows)
    .catch((e) => {
      console.log(e, 'error')
    });
};

export const fetchDataToDownload = (specieid) => {
  const q = `SELECT * FROM populations_all_data ${specieid ? `where species_id=${specieid}` : ''}`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}&format=csv`)
    .then(({ data }) => data)
};
