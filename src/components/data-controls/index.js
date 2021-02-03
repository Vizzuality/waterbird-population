import { connect } from 'react-redux';

import { selectFiltersProps, selectPopulationDetailProps } from 'modules/explore/selectors';
import { setFilters, resetFilters, setPublications, resetPopulationsByLocation } from 'modules/explore/actions';

import Component from './component';

const mapStateToProps = state => ({
  page: state.router.type,
  filters: state.population.filters,
  publications: state.population.publications,
  dataSpecs: state.router.payload,
  search: state.population.search,
  lonLat: state.map.lonLat,
  ...selectFiltersProps(state),
  ...selectPopulationDetailProps(state)
})

const mapDispatchToProps = { setFilters, resetFilters, setPublications, resetPopulationsByLocation };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
