import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import orderBy from 'lodash/orderBy';
import flatten from 'lodash/flatten';
import uniqBy from 'lodash/uniqBy';

import { createSelector, createStructuredSelector } from 'reselect';

export const specie_id = (state) => state?.router?.payload?.specie_id;
export const population_id = (state) => state?.router?.payload?.population_id;
export const data = (state) => state?.population?.data;
export const filters = (state) => state.population.filters;

export const familyId = (state, props) => props?.familyId;
export const specieId = (state, props) => props?.specieId;

export const selectPopulationFiltered = createSelector(
  [data, filters],
  (_data, _filters) => {
    return _data;
  }
)

export const selectPopulationFamilies = createSelector(
  [selectPopulationFiltered],
  (_data) => {
    if (!_data || isEmpty(_data)) return [];

    return orderBy(uniqBy(_data.map(p => {
      return {
        ...p.family,
        name: trim(p.family.name),
        ordername: trim(p.family.ordername)
      }
    }), 'id'), 'name')
  }
);

export const selectPopulationSpecies = createSelector(
  [selectPopulationFiltered, familyId],
  (_data, _familyId) => {
    if (!_data || isEmpty(_data)) return [];

    const populationsByFamily = _data.filter(d => d.family.id === _familyId);

    return orderBy(uniqBy(populationsByFamily.map(p => {
      return {
        ...p.specie,
        scientificname: trim(p.specie.scientificname),
        commonname: trim(p.specie.commonname),
      }
    }), 'id'), 'scientificname');
  }
);

export const selectPopulationsData = createSelector(
  [data, specieId],
  (_data, _specieId) => {
    if (!_data || isEmpty(_data)) return [];

    const populationsBySpecie = _data.filter(d => d.specie.id === _specieId);

    return populationsBySpecie.map(d => {
      const orderedPublicationsSizes = orderBy(d.sizes, ['endyear', 'publication_id'], ['desc', 'desc'])
      const publication = d.publications.find(p => p.id === orderedPublicationsSizes[0].publication_id);

      const size = d.sizes.find(s => s.publication_id === publication.id);
      const trend = d.trends.find(s => s.publication_id === publication.id);
      const percentLevel = d.populationonepercentlevel.find(s => s.publication_id === publication.id);

      return {
        id : d.id,
        populationId: d.id,
        name: d.name,
        size: `${size.maximun} - ${size.minimum}`,
        'size_year': `${size.startyear} - ${size.endyear}`,
        trend: trend.name,
        'size_reference_notes': size.reference_notes,
        'size_reference_info': size.reference_info,
        'trend_year': `${trend.startyear} - ${trend.endyear}`,
        'trend_quality': trend.quality,
        'trend_notes': trend.notes,
        'trend_references': trend.reference,
        'size_estimates_quality': size.quality,
        'percent': percentLevel.onepercet,
        'yearset': percentLevel.yearset,
        publication: d.publications.name,
        commonname: d.commonname,
        redlistcategory: d.redlistcategory,
        scientificname: d.scientificname,
        'family_name': d.family.name,
        'order_name': d.family.ordername,
        'breedingrange': d.breedingrange,
        'nonbreedingrange': d.nonbreedingrange
      }
    })
  }
);


export const selectPopulationOptions = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    return _data.map(p => {
      return {
        label: trim(p.name) || '-',
        value: p.id,
        family: p.family.name,
        specie: p.specie.commonname
      }
    });
  }
);

export const selectPopulationInfoData = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];
    const regions = [
      { id: 'africa', name: 'Africa' },
      { id: 'asia', name: 'Asia' },
      { id: 'europe', name: 'Europe' },
      { id: 'neotropics', name: 'Neotropics' },
      { id: 'northamerica', name: 'North America' },
      { id: 'oceania', name: 'Oceania' }
    ]
    const ramsar = regions.filter(r => !!population[r.id]);

    return [
      [{ head: 'Order name', value: trim(population.family.ordername) || '-' }],
      [{ head: 'Order family', value: trim(population.family.name) || '-' }],
      [{ head: 'Common name', value: trim(population.specie.commonname) || '-' }, { head: 'Scientific name', value: trim(population.specie.scientificname) || '-' }],
      [{ head: 'Population name', value: trim(population.name) || '-' }],
      [{ head: 'Breeding range', value: trim(population.breedingrange) || '-' }, { head: 'Non-breeding name', value: trim(population.nonbreedingrange) || '-' }],
      [{ head: 'Red list', value: trim(population.specie.redlistcategory), className: "-tag" }],
      [{ head: 'Ramsar regions', value: ramsar.map(r => r.name).join(',') }]
    ]
  }
);

export const selectPopulationSizeData = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];

    return population.publications.map(p => {
      const { id, name } = p;
      const size = population.sizes.find(s => s.publication_id === id);
      const { startyear, endyear, maximum, minimum, quality, notes, reference_id, reference_info } = size;

      return {
        specie: _specie_id,
        population: _population_id,
        publication: name,
        startyear,
        endyear,
        maximum,
        minimum,
        quality,
        notes: trim(notes) ? [
          { id: 1, info: trim(notes) }
        ] : [],
        references: (reference_id && reference_info) ? [
          { id: reference_id, info: reference_info }
        ] : []
      }
    })
  }
);

export const selectPopulationTrendData = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];

    return population.publications.map(p => {
      const { id, name: publication } = p;
      const trend = population.trends.find(s => s.publication_id === id);
      const { startyear, endyear, name, quality, notes, reference_id, reference_info } = trend;

      return {
        specie: _specie_id,
        population: _population_id,
        publication,
        startyear,
        endyear,
        name,
        quality,
        notes: trim(notes) ? [
          { id: 1, info: trim(notes) }
        ] : [],
        references: (reference_id && reference_info) ? [
          { id: reference_id, info: reference_info }
        ] : []
      }
    })
  }
);

export const selectPopulationPercentData = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];

    return population.publications.map(p => {
      const { id, name: publication } = p;
      const percentlevel = population.populationonepercentlevel.find(s => s.publication_id === id);
      const { yearset, onepercent, note } = percentlevel;

      return {
        publication,
        yearset,
        onepercent,
        notes: trim(note) ? [
          { id: 1, info: trim(note) }
        ] : [],
      }
    })
  }
);

export const selectPopulationReferences = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];

    const references = population.publications.map(p => {
      const { id } = p;
      const size = population.sizes.find(s => s.publication_id === id);
      const trend = population.trends.find(s => s.publication_id === id);

      return [
        ...size.reference_id && size.reference_info ? [{ id: size.reference_id, info: size.reference_info }] : [],
        ...trend.reference_id && trend.reference_info ? [{ id: trend.reference_id, info: trend.reference_info }] : []
      ];
    });

    return orderBy(uniqBy(flatten(references), 'id'), 'id');
  }
);

export const selectPopulationLayers = createSelector(
  [specie_id, population_id],
  (_specie_id, _population_id) => {
    return [
      // GEOJSON DATA LAYER
      {
        id: 'populations-by-specie',
        type: 'geojson',
        source: {
          type: 'geojson',
          data: `${process.env.REACT_APP_CARTO_BASE_URL}sql?q=SELECT * from species_and_flywaygroups where wpesppid = {{specieid}}&api_key=2fbf264d4431656a7d979682d59b6f5c79c9e3b4&format=geojson`,
          promoteId: 'wpepopid'
        },
        render: {
          layers: [
            {
              filter: [
                'all',
                ['==', 'wpepopid', +_population_id]
              ],
              type: "fill",
              //  "source-layer": "layer0",
              paint: {
                'fill-color': '#FFBB00',
                'fill-opacity': 0.25
              }
            },
            {
              filter: [
                'all',
                ['==', 'wpepopid', +_population_id]
              ],
              type: "line",
              //  "source-layer": "layer0",
              paint: {
                "line-color": "#000000",
                "line-opacity": 0.5,
                "line-dasharray": [1, 2]
              }
            },
            {
              filter: [
                'all',
                ['!=', 'wpepopid', +_population_id]
              ],
              type: "fill",
              //  "source-layer": "layer0",
              paint: {
                'fill-color': [
                  'case',
                  ['boolean', ['feature-state', 'hover'], false],
                  '#FFBB00',
                  '#000'
                ],
                'fill-opacity': 0.05
              }
            },
            {
              filter: [
                'all',
                ['!=', 'wpepopid', +_population_id]
              ],
              type: "line",
              //  "source-layer": "layer0",
              paint: {
                "line-color": "#000000",
                "line-opacity": 0.5,
                "line-dasharray": [1, 2]
              }
            }
          ]
        },
        paramsConfig: [
          { key: 'specieid', required: true }
        ],
        interactionConfig: {
          enable: true
        }
      },
    ]
  }
);


export const selectPopulationProps = createStructuredSelector({
  populationData: selectPopulationsData,
  populationFamilies: selectPopulationFamilies,
  populationSpecies: selectPopulationSpecies
});


export const selectPopulationDetailProps = createStructuredSelector({
  populationOptions: selectPopulationOptions,
  populationInfoData: selectPopulationInfoData,
  populationSizeData: selectPopulationSizeData,
  populationTrendData: selectPopulationTrendData,
  populationPercentData: selectPopulationPercentData,
  populationReferences: selectPopulationReferences,
  populationLayers: selectPopulationLayers
});
