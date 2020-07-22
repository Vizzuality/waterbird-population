import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';

import { createSelector, createStructuredSelector } from 'reselect';

export const specie_id = (state) => state?.router?.payload?.specie_id;
export const population_id = (state) => state?.router?.payload?.population_id;
export const data = (state) => state?.population?.data;

export const selectPopulationInfoData = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data) || isEmpty(_data[_specie_id])) return [];

    const population = _data[_specie_id].find(p => p.id === +_population_id) || _data[_specie_id][0];
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
    if (!_specie_id || !_data || isEmpty(_data) || isEmpty(_data[_specie_id])) return [];

    const population = _data[_specie_id].find(p => p.id === +_population_id) || _data[_specie_id][0];

    return population.publications.map(p => {
      const { id, name } = p;
      const size = population.sizes.find(s => s.publication_id === id);
      const { startyear, endyear, maximum, minimum } = size;

      return {
        publication: name,
        startyear,
        endyear,
        maximum,
        minimum
      }
    })
  }
);

export const selectPopulationTrendData = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data) || isEmpty(_data[_specie_id])) return [];

    const population = _data[_specie_id].find(p => p.id === +_population_id) || _data[_specie_id][0];

    return population.publications.map(p => {
      const { id, name: publication } = p;
      const trend = population.trends.find(s => s.publication_id === id);
      const { startyear, endyear, name, quality } = trend;

      return {
        publication,
        startyear,
        endyear,
        name,
        quality
      }
    })
  }
);

export const selectPopulationPercentData = createSelector(
  [specie_id, population_id, data],
  (_specie_id, _population_id, _data) => {
    if (!_specie_id || !_data || isEmpty(_data) || isEmpty(_data[_specie_id])) return [];

    const population = _data[_specie_id].find(p => p.id === +_population_id) || _data[_specie_id][0];

    return population.publications.map(p => {
      const { id, name: publication } = p;
      const percentlevel = population.populationonepercentlevel.find(s => s.publication_id === id);
      const { yearset, onepercent } = percentlevel;

      return {
        publication,
        yearset,
        onepercent
      }
    })
  }
);


export const selectPopulationDetailProps = createStructuredSelector({
  populationInfoData: selectPopulationInfoData,
  populationSizeData: selectPopulationSizeData,
  populationTrendData: selectPopulationTrendData,
  populationPercentData: selectPopulationPercentData
});
