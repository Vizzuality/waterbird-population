import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import orderBy from 'lodash/orderBy';
import flatten from 'lodash/flatten';
import uniqBy from 'lodash/uniqBy';
import Fuse from 'fuse.js';

import { createSelector, createStructuredSelector } from 'reselect';
import { setFilters } from 'modules/population/actions';

import { tags, regions } from './constants';

import { createSelector, createStructuredSelector } from 'reselect';

<<<<<<< HEAD
=======
export const familyId = (state, props) => props?.familyId;
export const specieId = (state, props) => props?.specieId;
>>>>>>> WIP: widgets data
export const specie_id = (state) => state?.router?.payload?.specie_id;
export const population_id = (state) => state?.router?.payload?.population_id;
export const data = (state) => state?.population?.data;
export const filters = (state) => state?.population.filters;
export const publications = (state) => state?.population.publications;
export const user = (state) => state?.user;
export const search = (state) => state?.population.search;
export const lonLat = (state) => state?.map.lonLat;
export const populations_by_location = (state) => state?.population.populationsByLocation.data;

<<<<<<< HEAD
export const familyId = (state, props) => props?.familyId;
export const specieId = (state, props) => props?.specieId;

=======
>>>>>>> WIP: widgets data
export const selectPopulationFiltered = createSelector(
  [data, filters, search, populations_by_location],
  (_data, _filters, _search, _populations_by_location) => {
    if (!_data || isEmpty(_data)) return [];

    const populationsIdsByLocation = _populations_by_location.map(p => p.wpepopid);
    const populationsByLocation = _data.filter(d => populationsIdsByLocation.includes(d.id));
    const populationsData = _populations_by_location.length ? populationsByLocation : _data;

    const fuse = _search && _search.length && new Fuse(populationsData, {
      keys: [
        'family.name', 'family.ordername',
        'name',
        'conservation.conservation_framework',
        'specie.commonname', 'specie.redlistcategory', 'specie.scientificname'
      ],
      threshold: 0.1,
    });


    const dataFiltered = fuse && fuse
      .search(_search)
      .map(d => d.item)

    return (
      (dataFiltered ? dataFiltered : populationsData)
        .filter(d => {
          const familyIds = _filters.family_id
            && _filters.family_id.length
            && _filters.family_id.map(f => f.value);
          const isFamily = familyIds
            ? familyIds.includes(d.family.id) : true;

          const publications = d.publications.map(p => p.value);
          const publicationId = _filters.publication_id
            && _filters.publication_id.length
            && _filters.publication_id.map(p => p.id);
          const isPublication = publicationId
            ? publications.includes(publicationId)
            : true;

          const conservationIds = _filters.framework_id
            && _filters.framework_id.length
            && _filters.framework_id.map(f => f.value);
          const isProtected = conservationIds
            ? conservationIds.includes(d.conservation[0].id)
            : true;
          const flywayIds = _filters.flyway_region_id
            && _filters.flyway_region_id.length
            && _filters.flyway_region_id.map(f => f.value);
          const isFlyway = flywayIds
            ? flywayIds.includes(d.flyways[0].id)
            : true;

          const ramsarIds = _filters.ramsar_region_id
            && _filters.ramsar_region_id.length
            && _filters.ramsar_region_id.map(f => f.value);
          const isRamsarRegion = ramsarIds
            ? ramsarIds.some(r => d[r] === 1) : true;

          const redListIds = _filters.red_list_id
            && _filters.red_list_id.length
            && _filters.red_list_id.map(f => f.value);
          const isRedList = redListIds
            ? redListIds.includes(d.specie.redlistcategory_id) : true;

          const array = [isFamily, isProtected, isPublication, isFlyway, isRamsarRegion, isRedList];
          return array.every(d => d)
        }
        )
    )
  }
);

export const selectPopulationFamilies = createSelector(
  [selectPopulationFiltered],
  (_data) => {
    if (!_data || isEmpty(_data)) return [];

    return orderBy(uniqBy(_data
      .map(p => {
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
      const tag = tags.find(t => t.description === trim(p.specie.redlistcategory));
      return {
        ...p.specie,
        scientificname: trim(p.specie.scientificname),
        commonname: trim(p.specie.commonname),
        redlistcategory: p.specie.redlistcategory,
        color: tag.color
      }
    }), 'id'), 'scientificname');
  }
);

export const selectPopulationsData = createSelector(
  [data, specieId, user],
  (_data, _specieId, _user) => {
    if (!_data || isEmpty(_data)) return [];

    const populationsBySpecie = _data.filter(d => d.specie.id === _specieId);
    return populationsBySpecie.map(d => {
      const draftId = d.publications
        .filter(p => p.published === 0)
        .map(f => f.id);

      const orderedPublicationsSizes = orderBy(
        _user.name ? d.sizes : d.sizes.filter(s => s.publication_id !== draftId[0]),
        ['endyear', 'publication_id'], ['desc', 'desc']);
      const publication = d.publications.find(p => p.id === orderedPublicationsSizes[0].publication_id);
      const size = d.sizes.find(s => s.publication_id === publication.id);
      const trend = d.trends.find(s => s.publication_id === publication.id);
      const percentLevel = d.populationonepercentlevel.find(s => s.publication_id === publication.id);
      const size_notes = size.notes && { id: size.id, note: size.notes, type: 'size', reference: 'S' };
      const trend_notes = trend.notes && { id: trend.id, note: trend.notes, type: 'trend', reference: 'T' };
      const notes = (size_notes && trend.notes)
        ? [size_notes].concat([trend_notes])
        : size.notes ?
          size_notes : trend_notes;


      return {
        id: d.id,
        populationId: d.id,
        name: d.name,
        size: `${size.maximum} - ${size.minimum}`,
        'size_year': `${size.startyear} - ${size.endyear}`,
        trend: trend.name,
        'size_references': size.references,
        'trend_year': `${trend.startyear} - ${trend.endyear}`,
        'trend_quality': trend.quality,
        'notes': notes,
        'trend_references': trend.references,
        'size_estimates_quality': size.quality,
        'percent': percentLevel.onepercent,
        'yearset': percentLevel.yearset,
        publication: publication.name,
        commonname: d.specie.commonname,
        redlistcategory: d.specie.redlistcategory,
        scientificname: d.specie.scientificname,
        'family_name': d.family.name,
        'order_name': d.family.ordername,
        'breedingrange': d.breedingrange,
        'nonbreedingrange': d.nonbreedingrange,
      }
    })
  }
);

export const selectLastPublicationData = createSelector(
  [data, specieId, user, filters, publications],
  (_data, _specieId, _user, _filters, _publications) => {
    if (!_data || isEmpty(_data)) return [];


    const populationsBySpecie = _data.filter(d => d.specie.id === _specieId);

    if (_specieId) {
      return populationsBySpecie.map(d => {
        const draftId = d.publications
          .filter(p => p.published === 0)
          .map(f => f.id);

        const orderedPublicationsSizes = orderBy(
          _user.name ? d.sizes : d.sizes.filter(s => s.publication_id !== draftId[0]),
          ['endyear', 'publication_id'], ['desc', 'desc']);

        const publication = d.publications.find(p => p.id === orderedPublicationsSizes[0].publication_id);

        const size = d.sizes.find(s => s.publication_id === publication.id);
        const trend = d.trends.find(s => s.publication_id === publication.id);
        const percentLevel = d.populationonepercentlevel.find(s => s.publication_id === publication.id);

        setFilters({
          ..._filters,
          'publication_id': { label: publication.name, value: publication.id }
        });

        return {
          population_id: d.id,
          publication_id: publication,
          size_id: size.id,
          trend_id: trend.id,
          onepercent_id: percentLevel.id,
        }
      })
    }
    else {
      return _publications.map(p => {
        return {
          label: p.description,
          value: p.id
        }
      })
    }
  }
);



export const selectPopulationOptions = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    return _data.map(p => {
      const tag = tags.find(t => t.description === trim(p.specie.redlistcategory));

      return {
        label: trim(p.name) || '-',
        value: p.id,
        family: p.family.name,
        specie: p.specie.commonname,
        scientificname: trim(p.specie.scientificname),
        redlistcategory: p.specie.redlistcategory,
        tag_color: tag.color,
        tag_status: tag.abbreviation
      }
    });
  }
);

export const selectPopulationInfoData = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];

    const ramsar = regions.filter(r => !!population[r.id]);

    const tag = tags.find(t => t.description === trim(population.specie.redlistcategory));

    return [
      [{ head: 'Order name', value: trim(population.family.ordername) || '-' }],
      [{ head: 'Order family', value: trim(population.family.name) || '-' }],
      [{ head: 'Common name', value: trim(population.specie.commonname) || '-' }, { head: 'Scientific name', value: trim(population.specie.scientificname) || '-' }],
      [{ head: 'Population name', value: trim(population.name) || '-' }],
      [{ head: 'Breeding range', value: trim(population.breedingrange) || '-' }, { head: 'Non-breeding name', value: trim(population.nonbreedingrange) || '-' }],
      [{ head: 'Red list', value: trim(population.specie.redlistcategory), className: "-tag", color: tag.color, border: tag.border && tag.border }],
      [{ head: 'Ramsar regions', value: ramsar.map(r => r.name).join(',') }]
    ]
  }
);

export const selectPopulationSizeData = createSelector(
  [specie_id, population_id, data, user],
  (_specie_id, _population_id, _data, _user) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];
    const publishedPopulations = population.publications.filter(p => p.published === 1);

    return orderBy((_user.name ? population.publications : publishedPopulations).map(p => {
      const { id, name, published } = p;
      const size = population.sizes.find(s => s.publication_id === id);
      const { id: size_id, startyear, endyear, maximum, minimum, quality, notes, references } = size;
      const parsedReferences = (references && references.length)
        ? references.map(({ reference_id, body }) => { return { id: reference_id, info: body } })
        : [];

      const filteredReferences = parsedReferences.reduce((acc, current) => {
        const x = acc.find(item => item.id === current.id);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);

      return {
        specie: _specie_id,
        size_id: size_id,
        population: +_population_id,
        publication: name,
        publication_id: id,
        published,
        startyear,
        endyear,
        maximum,
        minimum,
        quality,
        notes: trim(notes) ? [
          { id: size_id, info: trim(notes) }
        ] : [],
        references: filteredReferences
      }
    }), 'publication_id', 'desc')
  }
);

export const selectPopulationTrendData = createSelector(
  [specie_id, population_id, data, user],
  (_specie_id, _population_id, _data, _user) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];
    const publishedPopulations = population.publications.filter(p => p.published === 1);

    return orderBy((_user.name ? population.publications : publishedPopulations).map(p => {
      const { id, name: publication, published } = p;
      const trend = population.trends.find(s => s.publication_id === id);
      const { id: trend_id, startyear, endyear, name, quality, notes, references } = trend;

      return {
        specie: _specie_id,
        population: +_population_id,
        trend_id,
        publication,
        published,
        publication_id: id,
        startyear,
        endyear,
        name,
        quality,
        notes: trim(notes) ? [
          { id: trend_id, info: trim(notes) }
        ] : [],
        references: (references && references.length)
          ? references.map(({ reference_id, body }) => { return { id: reference_id, info: body } })
          : []
      }
    }), 'publication_id', 'desc')
  }
);

export const selectPopulationPercentData = createSelector(
  [specie_id, population_id, data, user],
  (_specie_id, _population_id, _data, _user) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];
    const publishedPopulations = population.publications.filter(p => p.published === 1);

    return orderBy((_user.name ? population.publications : publishedPopulations).map(p => {
      const { id, name: publication, published } = p;
      const percentlevel = population.populationonepercentlevel.find(s => s.publication_id === id);
      const { id: onepercent_id, yearset, onepercent, note } = percentlevel;

      return {
        specie: _specie_id,
        population: _population_id,
        publication,
        published,
        publication_id: id,
        yearset,
        onepercent,
        onepercent_id,
        notes: trim(note) ? [
          { id: onepercent_id, info: trim(note) }
        ] : [],
      }
    }), 'publication_id', 'desc')
  }
);

export const selectPopulationConservationFramework = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];

    return population.conservation.map(p => p)
  }
);

export const selectPopulationReferences = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];

    const references = {
      size: orderBy(uniqBy(flatten(population.sizes.map(s => s.references)), 'id').filter(r => r.id), 'id', 'desc'),
      trend: orderBy(uniqBy(flatten(population.trends.map(s => s.references)), 'id').filter(r => r.id), 'id', 'desc'),
    };

    return [
      ...references.size && references.size.length
        ? references.size.map(s => {
          return { id: s.id, info: s.body, type: 'S' }
        })
        : [],
      ...references.trend && references.trend.length
        ? references.trend.map(s => {
          return { id: s.id, info: s.body, type: 'T' }
        })
        : []
    ];
  }
);

export const selectPopulationNotes = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.id === +_population_id) || _data[0];

    return uniqBy(flatten([
      orderBy(population.sizes.map(s => {
        return {
          id: s.id, info: trim(s.notes), type: 'S'
        }
      }).filter(n => n.info), 'id', 'desc'),
      orderBy(population.trends.map(s => {
        return {
          id: s.id, info: trim(s.notes), type: 'T'
        }
      }).filter(n => n.info), 'id', 'desc'),
      orderBy(population.populationonepercentlevel.map(s => {
        return {
          id: s.id, info: trim(s.note), type: '%'
        }
      }).filter(n => n.info), 'id', 'desc')
    ]), 'id')
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
          data: `${process.env.REACT_APP_CARTO_BASE_URL}sql?q=
          SELECT * from species_and_flywaygroups where wpesppid = {{specieid}}&api_key=${process.env.REACT_APP_CARTO_API_TOKEN}&format=geojson`,
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

export const selectPopulationsLayersByLocation = createSelector(
  [specie_id, population_id, lonLat],
  (_specie_id, _population_id, _lonLat) => {
    return [
      // GEOJSON DATA LAYER
      {
        id: 'populations-by-location',
        type: 'geojson',
        source: {
          type: 'geojson',
          data: `${process.env.REACT_APP_CARTO_BASE_URL}sql?q=SELECT * FROM species_and_flywaygroups WHERE
          ST_Intersects(
                     ST_SetSRID(
                        ST_MakePoint({{lng}},{{lat}}),4326),the_geom) &api_key=${process.env.REACT_APP_CARTO_API_TOKEN}&format=geojson`,
        },
        render: {
          layers: [
            {
              type: "fill",
              //  "source-layer": "layer0",
              paint: {
                'fill-color': '#FFBB00',
                'fill-opacity': 0.25
              }
            },
            {
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
          { key: 'lng', required: true },
          { key: 'lat', required: true }
        ],
        interactionConfig: {
          enable: true
        }
      },
      {
        id: 'location',
        type: 'geojson',
        source: {
          type: 'geojson',
          data: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": _lonLat
                }
              }
            ]
          }
        },
        render: {
          layers: [
            {
              type: "circle",
              //  "source-layer": "layer0",
              paint: {
                "circle-radius": 100,
                "circle-color": "#1C1B27"
              },
              // metadata: {
              //   position: 'top'
              // }
            },
          ]
        },
        paramsConfig: [
          { key: 'lng', required: true },
          { key: 'lat', required: true }
        ],
        interactionConfig: {
          enable: true
        }
      },
    ]
  }
);

export const selectActiveFilters = createSelector(
  [filters],
  (_filters) => Object.entries(_filters).filter(f => f[1].length)
);


export const selectFiltersProps = createStructuredSelector({
  activeFilters: selectActiveFilters
});


export const selectPopulationProps = createStructuredSelector({
  populationData: selectPopulationsData,
  populationFamilies: selectPopulationFamilies,
  populationSpecies: selectPopulationSpecies,
  populationsNumber: selectPopulationFiltered
});


export const selectPopulationDetailProps = createStructuredSelector({
  user,
  populationOptions: selectPopulationOptions,
  populationInfoData: selectPopulationInfoData,
  populationConservationFramework: selectPopulationConservationFramework,
  populationSizeData: selectPopulationSizeData,
  populationTrendData: selectPopulationTrendData,
  populationPercentData: selectPopulationPercentData,
  populationReferences: selectPopulationReferences,
  populationNotes: selectPopulationNotes,
  populationLayers: selectPopulationLayers,
  populationsLayersByLocation: selectPopulationsLayersByLocation
});
