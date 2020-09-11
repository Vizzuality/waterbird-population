import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';


import { createSelector, createStructuredSelector } from 'reselect';

// shared selectors with populations
import { selectPopulationFiltered } from 'modules/population/selectors';

import { setFilters } from 'modules/analysis/actions';

export const specie_id = (state) => state?.router?.payload?.specie_id;
export const data = (state) => state?.population.data;
export const trends = (state) => state?.analysis.trends;
export const categories = (state) => state?.analysis.trend_categories;
export const publications = (state) => state?.population.publications;
export const publicationSelected = (state) => state?.analysis.populations_trends_widget.selectedPublication;
export const filters = (state) => state?.analysis.filters;

export const selectFamilies = createSelector(
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

export const selectPublicationData = createSelector(
  [data, specie_id, filters, publications],
  (_data, _specieId, _filters, _publications) => {
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
      const orderedPublicationsSizes = orderBy(d.sizes,['endyear', 'publication_id'], ['desc', 'desc']);

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
        .filter(f => _publicationSelected
          ? _publicationSelected === trim(f.publication_id)
          : _lastPublication.last_publication_id === trim(f.publication_id))
      )

          console.log(trends)
          debugger
      //.filter((i, x) => p.map(d => d.trends).flat().indexOf(i) === x)
      const total_populations = populationsIds.length;

      const trendsCount = _categories.map(c => {

        return {
          [c]: trends.reduce(function (n, trend) {
          return trim(trend.state) === c ? n + 1 : n;
        }, 0)}
      })

      const trendsperce = _categories.map(c => {
        return {
          [c]: trends.reduce(function (n, trend) {
          return (trim(trend.state) === c ? n + 1 : n) * 100 / total_populations;
        }, 0)}
      })

      //const trendPercentages = trendsCount.map
console.log({
  id: p[0].family.id,
  name: p[0].family.name,
  ordername: p[0].family.ordername,
  populationsIds,
  total_populations,
  trendsCount,
  trendsperce
})
      return {
        id: p[0].family.id,
        name: p[0].family.name,
        ordername: p[0].family.ordername,
        populationsIds,
        total_populations,
        trendsCount,
        trendsperce
      }
    })
  });
// export const selectTrendLabels = createSelector(
//   [_trends],
//   (_trends) => {

//     const colorSchema = [
//       '#BFD630',
//       '#5DBEE1',
//       '#0282B0',
//       '#EB6240',
//     ];

//     console.log(trends)

//     return null;
//   }
// )




export const selectWidgetsProps = createStructuredSelector({
  families: selectFamilies,
  familyTrends: selectFamilyTrends,
  //trendLabels: selectTrendLabels

});

