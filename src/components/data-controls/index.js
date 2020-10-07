import { connect } from 'react-redux';

import { selectFiltersProps, selectPopulationDetailProps } from 'modules/explore/selectors';
import { setFilters, resetFilters } from 'modules/explore/actions';

import Component from './component';

const mapStateToProps = state => ({
  page: state.router.type,
  filters: state.population.filters,
  publications: state.population.publications,
  dataSpecs: state.router.payload,
  ...selectFiltersProps(state),
  ...selectPopulationDetailProps(state)
})

const mapDispatchToProps = { setFilters, resetFilters };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
