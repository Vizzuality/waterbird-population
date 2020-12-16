import { setSingleFilter } from 'modules/explore/actions';

export const URL_PROPS = [
  {
    type: 'array',
    value: 'family',
    redux: 'population.filters.family_id',
    action: setSingleFilter,
    required: false,
    key: 'family_id'
  },
  {
    type: 'number',
    value: 'publication',
    redux: 'population.filters.publication_id',
    action: setSingleFilter,
    required: false,
    key: 'publication_id'
  },
  {
    type: 'array',
    value: 'conservation',
    redux: 'population.filters.framework_id',
    action: setSingleFilter,
    required: false,
    key: 'framework_id'
  },
  {
    type: 'array',
    value: 'flyway_region',
    redux: 'population.filters.flyway_region_id',
    action: setSingleFilter,
    required: false,
    key: 'flyway_region_id'
  },
  {
    type: 'array',
    value: 'ramsar_region',
    redux: 'population.filters.ramsar_region_id',
    action: setSingleFilter,
    required: false,
    key: 'ramsar_region_id'
  },
  {
    type: 'array',
    value: 'red_list',
    redux: 'population.filters.red_list_id',
    action: setSingleFilter,
    required: false,
    key: 'red_list_id'
  },
];
export default {
  URL_PROPS
};
