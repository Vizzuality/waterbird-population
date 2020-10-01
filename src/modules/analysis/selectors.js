import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';

import { createSelector, createStructuredSelector } from 'reselect';
import { regions } from 'modules/population/constants';

export const specie_id = (state) => state?.router?.payload?.specie_id;
export const data = (state) => state?.analysis.populations.data;
export const trends = (state) => state?.analysis.trends.data;
export const categories = (state) => state?.analysis.trend_categories.data;
export const publications = (state) => state?.population.publications;
export const publicationSelected = (state) => state?.analysis.filters.publication_id;
export const filters = (state) => state?.analysis.filters;

export const selectFilteredData = createSelector(
  [data, filters, publicationSelected],
  (_data, _filters, _publicationSelected) => {
    if (!_data || isEmpty(_data)) return [];

    // Filter by data published
    let publishedData = _data.map(d => {
      const drafts = d.publications
        .filter(p => p.published === 0)
        .map(draft => draft.id);

      const publishedOnePercentLevel = d.populationonepercentlevel.filter(f => !drafts.includes(f.publication_id));
      const publishedPublications = d.publications.filter(p => p.published === 1);
      const publishedSizes = d.sizes.filter(f => !drafts.includes(f.publication_id));
      const publishedTrends = d.trends.filter(f => !drafts.includes(f.publication_id));

      return {
        ...d,
        populationoneercentlevel: publishedOnePercentLevel,
        publications: publishedPublications,
        sizes: publishedSizes,
        trends: publishedTrends,
      }
    })

    const publicationData = publishedData.map(d => {

      const orderedPublicationsSizes = orderBy(d.sizes, ['endyear', 'publication_id'], ['desc', 'desc']);

      const publication = d.publications.find(
        p => _publicationSelected.value
          ? p.id === _publicationSelected.value
          : p.id === (orderedPublicationsSizes[0].publication_id));

      const selectedOnePercentLevel = publication ? d.populationonepercentlevel.filter(s => s.publication_id === publication.id) : [];
      const selectedPublication = publication ? d.publications.filter(s => s.id === publication.id) : [];
      const selectedSizes = publication ? d.sizes.filter(s => s.publication_id === publication.id) : [];
      const selectedTrends = publication ? d.trends.filter(s => s.publication_id === publication.id) : [];

      return {
        ...d,
        populationonepercentlevel: selectedOnePercentLevel,
        publications: selectedPublication,
        sizes: selectedSizes,
        trends: selectedTrends,
      }
    })

    return publicationData.filter(d => {
      const familyIds = _filters.family_id
        && _filters.family_id.length
        && _filters.family_id.map(f => f.value);
      const isFamily = familyIds
        ? familyIds.includes(d.family.id) : true;

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

      const array = [isFamily, isProtected, isFlyway, isRamsarRegion, isRedList];
      return array.every(d => d)
    }
    )
  }
);

export const selectFamilies = createSelector(
  [selectFilteredData],
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


export const selectFamilyTrends = createSelector(
  [selectFamilies, selectFilteredData, categories],
  (_families, _data, _categories) => {
    if (!_data || isEmpty(_data)) return [];

    let populationsByFamily = _families
      .map(f => _data.filter(d => trim(f.id) === trim(d.family.id) && d.trends.length))

    return populationsByFamily
      .filter(p => p.length)
      .map(p => {

        const trends = p.map(d => d.trends)
          .filter(t => t.length)
          .flat();

        const trendsCount = _categories.sort().map(c => {
          return {
            [c]: trends.reduce(function (n, trend) {
              return trim(trend.state) === c ? n + 1 : n;
            }, 0)
          }
        })

        const totalTrends = trendsCount.reduce((a, b) => a + parseInt(Object.values(b)), 0);
        const percentage = trendsCount.map(trend => {
          return {
            [Object.keys(trend)]: Object.values(trend)[0] !== 0
              ? Object.values(trend) * 100 / totalTrends
              : 0
          }
        })

        return {
          id: p[0].family.id,
          name: `${trim(p[0].family.name)}, (${trim(p[0].family.ordername)})`,
          trendsCount,
          percentage
        }
      })
  });

export const selectFamilyPopulations = createSelector(
  [selectFamilies, selectFilteredData, categories],
  (_families, _data, _categories, ) => {
    if (!_data || isEmpty(_data)) return [];

    const populationsByFamily = _families
      .map(f => _data
        .filter(d => (trim(f.id) === trim(d.family.id) && d.trends)))

    return orderBy(populationsByFamily
      .filter(p => p.length)
      .map(p => {

        const populationsIds = p.map(d => d.id);

        return {
          id: p[0].family.id,
          name: `${trim(p[0].family.name)}, (${trim(p[0].family.ordername)})`,
          total_populations: populationsIds.length
        }
      }), 'total_populations', 'desc')
  });

export const selectFamilyTrendsChart = createSelector(
  [selectFamilyTrends],
  (_familyTrends) => {
    return _familyTrends.map(d => {

      const stable = d.percentage.find(s => s['stable or fluctuating']) ? d.percentage.find(s => s['stable or fluctuating'])['stable or fluctuating'] : 0;
      const increasing = d.percentage.find(s => s.increasing) ? d.percentage.find(s => s.increasing).increasing : 0;
      const declining = d.percentage.find(s => s.declining) ? d.percentage.find(s => s.declining).declining : 0;
      const unknown = d.percentage.find(s => s.unclear) ? d.percentage.find(s => s.unclear).unclear : 0;
      const unclear = d.percentage.find(s => s.unknown) ? d.percentage.find(s => s.unknown).unknown : 0;

      const total = d.trendsCount.reduce((a, b) => a + parseInt(Object.values(b)), 0);
      return {
        name: d.name,
        'stable or fluctuating': stable,
        increasing: increasing,
        declining: declining,
        unknown: unknown + unclear,
        total,
      }
    })
  }
);


export const selectRegionTrendsChart = createSelector(
  [selectFilteredData],
  (_data) => {

    const populationsByRegion = regions.map(r => {

      const totalTrendsByRegion = {
        [r.name]: {
          name: _data
            .filter(d => d[r.id] === 1)
            .map(t => t.trends
              ? trim(t.name)
              : null
            ),
          trend: _data
            .filter(d => d[r.id] === 1)
            .map(t => t.trends
            )
        }
      }
      return totalTrendsByRegion;
    });

    return populationsByRegion.map(population => {

      const filteredNames = Object.values(population)[0].name.filter(t => t);
      const filteredTrends = Object.values(population)[0].trend.filter(t => t.length);

      return {
        [Object.keys(population)[0]]: {
          name: filteredNames,
          trend: {
            region: Object.keys(population)[0],
            'stable or fluctuating': filteredTrends.reduce((n, t) => {
              return trim(t[0].state) === 'stable or fluctuating' ? n + 1 : n
            }, 0),
            increasing: filteredTrends.reduce((n, t) => {
              return trim(t[0].state) === 'increasing' ? n + 1 : n
            }, 0),
            declining: filteredTrends.reduce((n, t) => {
              return trim(t[0].state) === 'declining' ? n + 1 : n
            }, 0),
            unknown: filteredTrends.reduce((n, t) => {
              return (trim(t[0].state) === 'unknown'
                || trim(t[0].state) === 'unclear') ? n + 1 : n
            }, 0),
            total_populations: filteredTrends.length
          }
        }
      }
    })
  })

export const selectWidgetsProps = createStructuredSelector({
  families: selectFamilies,
  familyTrends: selectFamilyTrends,
  familyPopulations: selectFamilyPopulations,
  familyTrendsChart: selectFamilyTrendsChart,
  regionTrendsChart: selectRegionTrendsChart
});
