import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'wpe-populations',
});

export const API = setup({
  baseURL: process.env.REACT_APP_CARTO_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  cache: {
    // ignoreCache: process.env.NODE_ENV === 'development',
    maxAge: 15 * 60 * 1000,
    exclude: { query: false },
    store,
  },
});

export const fetchPopulations = (specieid) => {
  const q = `select
  population_id,
  name,
  breedingrange,
  nonbreedingrange,
  species_id,
  active,
  asia,
  africa,
  europe,
  neotropics,
  northamerica,
  oceania,
  note,
  jsonb_build_object(
    'id', family_id,
    'name', family_name,
    'ordername', familyorder_name,
    'disposition', family_disposition,
    'english_name', family_english
  )
  as family,
  jsonb_build_object(
    'id', specie_id,
    'commonname', specie_commonname,
    'specid', specid,
    'scientificname', specie_scientificname,
    'redlistcategory', redlistcategory_name,
    'redlistcategory_id', redlistcategory_id,
    'taxonomicorder', specie_taxonomic_order
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
    'population_id', population_id,
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
    'references', population_trend_reference
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
  population_id,
  name,
  breedingrange,
  nonbreedingrange,
  asia,
  africa,
  europe,
  neotropics,
  northamerica,
  oceania,
  note,
  specid,
  species_id,
  specie_id,
  active,
  specie_commonname,
  specie_scientificname,
  specie_taxonomic_order,
  family_id,
  family_name,
  family_english,
  familyorder_name,
  family_disposition,
  redlistcategory_name,
  redlistcategory_id`;

  return API.get(`sql?q=${encodeURIComponent(q)}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`)
    .then(({ data, status }) => {
      return { data: data.rows, status };
    })
    .catch((e) => {
      console.log(e, 'error');
    });
};

export const fetchDataToDownload = (dataSpecs) => {
  const { specie_id, population_id, population_ids } = dataSpecs;
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
    sp.commonname AS species_commonname,
    sp.scientificname AS species_scientificname,
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
  LEFT JOIN species_1 sp ON n.species_id = sp.id
  LEFT JOIN populationonepercentlevel o ON n.id = o.populationid
  LEFT JOIN populationtrend t ON n.id = t.population_id
  LEFT JOIN populationpublication p ON p.population_id = s.population_id
  LEFT JOIN publication pub ON pub.id = p.publication_id
  LEFT JOIN trend trend ON trend.id = t.trend_id
  LEFT JOIN qualitycodetrend q ON q.id = t.trend_id
   ${population_ids ? `where o.populationid IN (${population_ids})` : ''}
   ${specie_id ? `where species_id=${specie_id}` : ''}
   ${population_id ? `and o.populationid=${population_id}` : ''}`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`).then(
    ({ data }) => data.rows
  );
};

export const fetchDataToDownloadAnalyze = (dataSpecs) => {
  const { specie_id } = dataSpecs;
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
    sp.commonname AS species_commonname,
    sp.scientificname AS species_scientificname,
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
    qcs.description AS quality_code_size,
    trend.trendcode,
    trend.trendsum
  FROM populationname n
  LEFT JOIN populationpublication p ON p.population_id = n.id
  LEFT JOIN species_1 sp ON n.species_id = sp.id
  LEFT JOIN populationsize s ON s.id = p.populationsize_id
  LEFT JOIN populationonepercentlevel o ON o.id = p.onepercent_id
  LEFT JOIN populationtrend t ON t.id = p.populationtrend_id
  LEFT JOIN publication pub ON pub.id = p.publication_id
  LEFT JOIN trend trend ON trend.id = t.trend_id
  LEFT JOIN qualitycodetrend q ON q.id = t.trendquality_id
  LEFT JOIN qualitycodesize qcs ON qcs.id = s.estimatequality_id
  where p.publication_id is not null
   ${specie_id ? `where species_id=${specie_id}` : ''}
   and pub.description NOT like '%draft%'`;

  return API.get(
    `sql?q=${encodeURIComponent(q)}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`
  ).then(({ data }) => data.rows);
};

export const fetchPopulationsCardData = (dataSpecs) => {
  const { populationId, publicationId } = dataSpecs;

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
  qcs.description AS quality_code_size,
  trend.trendcode,
  trend.trendsum
  FROM populationname n
  LEFT JOIN populationpublication p ON p.population_id = n.id
  LEFT JOIN populationsize s ON s.id = p.populationsize_id
  LEFT JOIN populationonepercentlevel o ON o.id = p.onepercent_id
  LEFT JOIN populationtrend t ON t.id = p.populationtrend_id
  LEFT JOIN publication pub ON pub.id = p.publication_id
  LEFT JOIN trend trend ON trend.id = t.trend_id
  LEFT JOIN qualitycodetrend q ON q.id = t.trendquality_id
  LEFT JOIN qualitycodesize qcs ON qcs.id = s.estimatequality_id
   ${publicationId ? 'where p.publication_id is not null' : ''}
   ${populationId ? `and n.id=${populationId}` : ''} and pub.description NOT like '%draft%'`;
  return API.get(
    `sql?q=${encodeURIComponent(q)}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`
  ).then(({ data }) => data.rows);
};

export const fetchPopulationsByLocation = (lng, lat) => {
  const q = `SELECT commonname,
    flywaygroup,
    flywayrange,
    populationname,
    scientificname,
    wpepopid FROM species_and_flywaygroups WHERE
  ST_Intersects(
             ST_SetSRID(
                ST_MakePoint(${lng},${lat}),4326),the_geom)`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`).then(
    ({ data, status }) => {
      return { data: data.rows, status };
    }
  );
};

// returns BBOX by pop id
export const fetchPopulationsBBox = (id) => {
  // const q = `SELECT ST_Envelope(the_geom) as the_geom from species_and_flywaygroups where wpepopid = ${id}`;
  const q = `WITH bbox as (
    SELECT ST_Envelope(the_geom) as the_geom
    FROM species_and_flywaygroups where wpepopid = ${id}
)
SELECT the_geom,
    ST_Xmin(the_geom) as xmin,
    ST_Ymin(the_geom) as ymin,
    ST_Xmax(the_geom) as xmax,
    ST_Ymax(the_geom) as ymax FROM bbox`;

  return API.get(`sql?q=${q}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}`).then(
    ({ data, status }) => {
      return { data: data.rows[0] || {}, status };
    }
  );
};
