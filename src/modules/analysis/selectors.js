import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';


import { createSelector, createStructuredSelector } from 'reselect';

// shared selectors with populations
import { selectPopulationFiltered } from 'modules/population/selectors';

import { setFilters } from 'modules/analysis/actions';
import { objectTypeSpreadProperty } from '@babel/types';

export const specie_id = (state) => state ?.router ?.payload ?.specie_id;
export const data = (state) => state ?.population.data;
export const trends = (state) => state ?.analysis.trends;
export const categories = (state) => state ?.analysis.trend_categories;
export const publications = (state) => state ?.population.publications;
export const publicationSelected = (state) => state ?.analysis.populations_trends_widget.selectedPublication;
export const filters = (state) => state ?.analysis.filters;

export const selectFamilyTrendsFiltered = createSelector(
  [data, filters],
  (_data, _filters) => {
    if (!_data || isEmpty(_data)) return [];

    return _data.filter(d => {
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
  )}
);

export const selectFamilies = createSelector(
  [selectFamilyTrendsFiltered],
  (_data) => {
    if (!_data || isEmpty(_data)) return [];
console.log(_data)
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

export const selectPublicationData = createSelector(
  [selectFamilyTrendsFiltered, specie_id, publications],
  (_data, _specieId, _publications) => {
    if (!_data || isEmpty(_data)) return [];


    // Filter by data published
    const publishedData = _data.map(d => {
      const drafts = d.publications
        .filter(p => p.published === 0)
        .map(draft => draft.id);

      const publishedOnePercentLevel = d.populationonepercentlevel
        .filter(f => !drafts.includes(f.publication_id));
      const publishedPublications = d.publications.filter(p => p.published === 1);
      const publishedSizes = d.sizes.filter(f => !drafts.includes(f.publication_id));
      const publishedTrends = d.trends.filter(f => !drafts.includes(f.publication_id));

      return {
        ...d,
        populationonepercentlevel: drafts.length ? publishedOnePercentLevel : d.populationonepercentlevel,
        publications: publishedPublications,
        sizes: drafts.length ? publishedSizes : d.sizes,
        trends: drafts.length ? publishedTrends : d.trends
      }
    });

    return publishedData.map(d => {
      const orderedPublicationsSizes = orderBy(d.sizes, ['endyear', 'publication_id'], ['desc', 'desc']);

      const publication = d.publications.find(
        p => p.id === (orderedPublicationsSizes[0].publication_id));

      const trend = publication ? d.trends.filter(s => s.publication_id === publication.id) : d.trends;

      return {
        population_id: d.id,
        publication_id: publication,
        trend,
        last_publication_id: publication && publication.id // Not all populations have publications
      }
    })
  }
);


export const selectFamilyTrends = createSelector(
  [selectFamilies, data, categories, selectPublicationData, publicationSelected],
  (_families, _data, _categories, _lastPublication, _publicationSelected) => {
    if (!_data || isEmpty(_data)) return [];

    const populationsByFamily = _families.map(f => _data.filter(d => trim(f.id) === trim(d.family.id)))

    return populationsByFamily.map(p => {

      const populationsIds = p.map(d => d.id);

      const trends = p.map(d => d.trends
        .find(f => _publicationSelected
          ? _publicationSelected === trim(f.publication_id)
          : _lastPublication.filter(l => l.last_publication_id === f.publication_id))
      )
        .flat();

      const total_populations = populationsIds.length;

      const trendsCount = _categories.map(c => {

        return {
          [c]: trends.reduce(function (n, trend) {
            return trim(trend.state) === c ? n + 1 : n;
          }, 0)
        }
      })

      const colorSchema = [
        '#BFD630',
        '#5DBEE1',
        '#0282B0',
        '#EB6240',
        'white'
      ];

      const trendsColors = _categories.map((c, i) => {
        return {
          [c]: colorSchema[i]
        }
      });

      const totalTrends = trendsCount.reduce((a, b) => a + parseInt(Object.values(b)), 0);

      const percentage = trendsCount.map(trend => {
        return { [Object.keys(trend)]: Object.values(trend) * 100 / totalTrends }
      });

      return {
        id: p[0].family.id,
        name: `${trim(p[0].family.name)}, (${trim(p[0].family.ordername)})`,
        total_populations,
        trendsCount,
        percentage,
        colors: trendsColors
      }
    })
  });

export const selectFamilyTrendsChart = createSelector(
  [selectFamilyTrends],
  (_familyTrends) => {
    return _familyTrends.map(d => {

      return {
        name: d.name,
        'stable or fluctuating': d.percentage.find(s => s['stable or fluctuating']) ? d.percentage.find(s => s['stable or fluctuating'])['stable or fluctuating'] : 0,
        increasing: d.percentage.find(s => s.increasing) ? d.percentage.find(s => s.increasing).increasing : 0,
        declining: d.percentage.find(s => s.declining) ? d.percentage.find(s => s.declining).declining : 0,
        unknown:
          d.percentage.find(s => s.unclear) ? d.percentage.find(s => s.unclear).unclear : 0 +
            d.percentage.find(s => s.unknown) ? d.percentage.find(s => s.unknown).unknown : 0,
      }
    })
  }
)

export const selectWidgetsProps = createStructuredSelector({
  families: selectFamilies,
  familyTrends: selectFamilyTrends,
  familyTrendsChart: selectFamilyTrendsChart,
  //trendLabels: selectTrendLabels

});

