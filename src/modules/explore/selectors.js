import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import orderBy from 'lodash/orderBy';
import flatten from 'lodash/flatten';
import uniqBy from 'lodash/uniqBy';
import Fuse from 'fuse.js';

import { setFilters } from 'modules/explore/actions';

import { tags, regions } from './constants';

import { createSelector, createStructuredSelector } from 'reselect';

export const specie_id = (state) => state?.router?.payload?.specie_id;
export const population_id = (state) => state?.router?.payload?.population_id;
export const data = (state) => state?.population?.data;
export const filters = (state) => state?.population.filters;
export const publications = (state) => state?.population.publications;
export const publicationSelected = (state) => state?.population.filters.publication_id;
export const user = (state) => state?.user;
export const search = (state) => state?.population.search;
export const lonLat = (state) => state?.map.lonLat;
export const populations_by_location = (state) => state?.population.populationsByLocation.data;

export const familyId = (state, props) => props?.familyId;
export const specieId = (state, props) => props?.specieId;

export const selectPopulationFiltered = createSelector(
  [data, filters, search, populations_by_location],
  (_data, _filters, _search, _populations_by_location) => {
    if (!_data || isEmpty(_data)) return [];

    const populationsIdsByLocation = _populations_by_location.map(p => p.wpepopid);

    const populationsByLocation = _data.filter(d => populationsIdsByLocation.includes(d.population_id));
    const populationsData = _populations_by_location.length ? populationsByLocation : _data;

    const fuse = _search && _search.length && new Fuse(populationsData, {
      keys: [
        'family.name', 'family.ordername',
        'name',
        'conservation.conservation_framework',
        'specie.commonname', 'specie.redlistcategory', 'specie.scientificname'
      ],
      threshold: 0.2,
    });


    const dataFiltered = fuse && fuse
      .search(_search)
      .map(d => d.item)

    return (
      (dataFiltered ? dataFiltered : populationsData)
        .filter(d => {

          const isFamily = _filters.family_id.length
            ? _filters.family_id.includes(d.family.id) : true;

          const publications = d.publications.map(p => p.value);

          const isPublication = _filters.publication_id
            ? publications.includes(_filters.publication_id)
            : true;

          const isProtected = _filters.framework_id.length
            ? _filters.framework_id.includes(d.conservation[0].id)
            : true;

          const isFlyway = _filters.flyway_region_id.length
            ? _filters.flyway_region_id.includes(d.flyways[0].id)
            : true;

          const isRamsarRegion = _filters.ramsar_region_id.length
            ? _filters.ramsar_region_id.some(r => d[r] === 1) : true;

          const isRedList = _filters.red_list_id.length
            ? _filters.red_list_id.includes(d.specie.redlistcategory_id) : true;

          const array = [isFamily, isProtected, isPublication, isFlyway, isRamsarRegion, isRedList];
          return array.every(d => d)
        }
      )
    )
  }
);

export const selectPopulationDownload = createSelector(
  [selectPopulationFiltered],
  (_data) => {
    if (!_data || isEmpty(_data)) return [];

    return orderBy(uniqBy(_data
      .map(p => {
        return {
          ...p.family,
          name: trim(p.family.name),
          ordername: trim(p.family.ordername),
          ...p
        }
      }), 'id'), 'name')
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
    }), 'id'), 'taxonomicorder');
  }
);

export const selectPopulationsData = createSelector(
  [data, specieId, user, publicationSelected],
  (_data, _specieId, _user, _publicationSelected) => {
    if (!_data || isEmpty(_data)) return [];
    const populationsBySpecie = _data.filter(d => d.specie.id === _specieId);
    return orderBy(populationsBySpecie.map(d => {
      const draftId = d.publications
        .filter(p => p.published === 0)
        .map(f => f.id);

      const orderedPublicationsSizes = orderBy(
        d.sizes.filter(s => s.publication_id !== draftId[0]),
        ['endyear', 'publication_id'], ['desc', 'desc']);
      const publication = d.publications.find(p => _publicationSelected.value ? p.id === _publicationSelected.value : p.id === orderedPublicationsSizes[0].publication_id);
      const size = publication ? d.sizes.find(s => s.publication_id === publication.id) : [];
      const trend = publication ? d.trends.find(s => s.publication_id === publication.id) : [];
      const percentLevel = publication ? d.populationonepercentlevel.find(s => s.publication_id === publication.id) : [];
      const size_notes = size.notes && { id: size.id, note: size.notes, type: 'size', reference: 'S' };
      const trend_notes = trend.notes && { id: trend.id, note: trend.notes, type: 'trend', reference: 'T' };
      const notes = (size_notes && trend.notes)
        ? [size_notes].concat([trend_notes])
        : size.notes ?
          size_notes : trend_notes;


      return {
        id: d.population_id,
        active: d.active,
        populationId: d.population_id,
        name: d.name,
        size: `${size.minimum} - ${size.maximum}`,
        'size_year': `${size.startyear} - ${size.endyear}`,
        trend: trend.name,
        'size_references': uniqBy(size.references, 'id'),
        'trend_year': `${trend.startyear} - ${trend.endyear}`,
        'trend_quality': trend.quality,
        'notes': notes,
        'trend_references': uniqBy(trend.references, 'id'),
        'size_estimates_quality': size.quality,
        'percent': percentLevel.onepercent,
        'yearset': percentLevel.yearset,
        publication_id: publication ? publication.id : '',
        publication: publication ? publication.name : '',
        commonname: d.specie.commonname,
        redlistcategory: d.specie.redlistcategory,
        scientificname: d.specie.scientificname,
        'family_name': d.family.name,
        'order_name': d.family.ordername,
        'breedingrange': d.breedingrange,
        'nonbreedingrange': d.nonbreedingrange,
      }
    }).filter(p => p.publication_id), ['active'], ['desc'])
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
          population_id: d.population_id,
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
        value: p.population_id,
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
    const population = _data.find(p => p.population_id === +_population_id) || _data[0];
    const ramsar = regions.filter(r => !!population[r.id]);
    const tag = tags.find(t => t.description === trim(population.specie.redlistcategory));
    return [
      [{ head: 'Order name', value: trim(population.family.ordername) || '-' }, { head: 'Order family', value: trim(population.family.name) || '-' }],
      [{ head: 'Name', value: trim(population.specie.commonname) || '-', aside: `(${trim(population.specie.scientificname)})` || '-'  }, { head: 'Global Red List', value: trim(population.specie.redlistcategory), className: "-tag", color: tag.color, border: tag.border && tag.border }],
      [{ head: 'Population name', value: trim(population.name) || '-' }],
      [{ head: 'Breeding range', value: trim(population.breedingrange) || '-' }, { head: 'Non-breeding name', value: trim(population.nonbreedingrange) || '-' }],
      [{ head: 'Ramsar regions', value: ramsar.map(r => r.name).join(',') }],
      [{ head: 'Notes', value: trim(population.note) || '-' }],
      [{ head: 'Active', value: population.active === 0 ? 'No' : 'Yes' }]
    ]
  }
);

export const selectPopulationSizeData = createSelector(
  [specie_id, population_id, data, user],
  (_specie_id, _population_id, _data, _user) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.population_id === +_population_id) || _data[0];
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

    const population = _data.find(p => p.population_id === +_population_id) || _data[0];
    const publishedPopulations = population.publications.filter(p => p.published === 1);

    return orderBy((_user.name ? population.publications : publishedPopulations).map(p => {
      const { id, name: publication, published } = p;
      const trend = population.trends.find(s => s.publication_id === id);
      const { id: trend_id, startyear, endyear, name, quality, notes, references } = trend;

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
        references: filteredReferences
      }
    }), 'publication_id', 'desc')
  }
);

export const selectPopulationPercentData = createSelector(
  [specie_id, population_id, data, user],
  (_specie_id, _population_id, _data, _user) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.population_id === +_population_id) || _data[0];
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

    const population = _data.find(p => p.population_id === +_population_id) || _data[0];

    return population.conservation.map(p => p)
  }
);

export const selectPopulationReferences = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data)) return [];

    const population = _data.find(p => p.population_id === +_population_id) || _data[0];

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

    const population = _data.find(p => p.population_id === +_population_id) || _data[0];

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
    if (!_lonLat) return [];
    return [
      // GEOJSON DATA LAYER
      {
        id: 'populations-by-location',
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
                "circle-radius": 10,
                "circle-color": "#1C1B27",
                "circle-stroke-width": 5,
                "circle-stroke-opacity": 0.2
              },
              metadata: {
                position: 'top'
              }
            },
          ]
        },
        interactionConfig: {
          enable: true
        }
      },
    ]
  }
);

export const selectActiveFilters = createSelector(
  [filters],
  (_filters) => Object.entries(_filters).filter(f => f[1].length || f[1].label)
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
  populationsLayersByLocation: selectPopulationsLayersByLocation,
  pop: selectPopulationDownload,
  populationsFiltered: selectPopulationFiltered,
  populationOptions: selectPopulationOptions,
  populationInfoData: selectPopulationInfoData,
  populationConservationFramework: selectPopulationConservationFramework,
  populationSizeData: selectPopulationSizeData,
  populationTrendData: selectPopulationTrendData,
  populationPercentData: selectPopulationPercentData,
  populationReferences: selectPopulationReferences,
  populationNotes: selectPopulationNotes,
  populationLayers: selectPopulationLayers,
});
