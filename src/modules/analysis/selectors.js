import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';


import { createSelector, createStructuredSelector } from 'reselect';

// shared selectors with populations
import { selectPopulationFiltered } from 'modules/population/selectors';

export const data = (state) => state?.population.data;
export const trends = (state) => state?.analysis.trends;
export const categories = (state) => state?.analysis.trend_categories;
export const publicationSelected = (state) => state?.analysis.populations_trends_widget.selectedPublication;


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

export const selectLastPublication = createSelector(
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
            _user.id ? d.sizes : d.sizes.filter(s => s.publication_id !== draftId[0]),
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


export const selectFamilyTrends = createSelector(
  [selectFamilies, data, categories, selectLastPublication, publicationSelected],
  (_families, _data, _categories, _lastPublication, _publicationSelected) => {
    if (!_data || isEmpty(_data)) return [];
    const _lastPublication = 9;
    const populationsByFamily = _families.map(f => _data.filter(d => trim(f.id) === trim(d.family.id)))

    return populationsByFamily.map(p => {

      const populationsIds = p.map(d => d.id);
      const trends = p.map(d => d.trends).flat()
        .filter(f =>console.log(f, _publicationSelected, _lastPublication) || _publicationSelected ? _publicationSelected === trim(f.publication_id) : _lastPublication === trim(f.publication_id))

      //.filter((i, x) => p.map(d => d.trends).flat().indexOf(i) === x)
console.log(trends)
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

