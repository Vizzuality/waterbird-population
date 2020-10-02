import { connect } from 'react-redux';

import { selectFiltersProps, selectPopulationDetailProps } from 'modules/population/selectors';
import { setFilters, resetFilters } from 'modules/population/actions';

import Component from './component';

const mapStateToProps = state => ({
  page: state.router.type,
  filters: state.population.filters,
  publications: state.population.publications,
  ...selectFiltersProps(state),
  ...selectPopulationDetailProps(state)
})

const mapDispatchToProps = { setFilters, resetFilters };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
