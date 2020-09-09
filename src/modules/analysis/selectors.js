import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';


import { createSelector, createStructuredSelector } from 'reselect';
import { selectPopulationFiltered } from 'modules/population/selectors';

export const data = (state) => state?.population.data;
export const trends = (state) => state?.analysis.trends;


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

export const selectFamilyTrends = createSelector(
  [selectFamilies, data],
  (_families, _data) => {
    if (!_data || isEmpty(_data)) return [];
console.log(_families, 'families')
  _families.map(d => {
    const familyTrends = _data.includes(f => d.id === f.family.id)
   console.log( familyTrends)


    return {
      family_id: d.id,
      name: d.name,
      name: d.ordername,



    }
  })


    return (
''
    )
  }
);

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
  families: selectFamilyTrends,
  familyTrends: selectFamilyTrends,
  //trendLabels: selectTrendLabels

});
