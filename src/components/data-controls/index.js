import { connect } from 'react-redux';

import { selectFiltersProps } from 'modules/population/selectors';
import { setFilters, resetFilters } from 'modules/population/actions';

import Component from './component';

const mapStateToProps = state => ({
  filters: state.population.filters,
  ...selectFiltersProps(state)
})

const mapDispatchToProps = { setFilters, resetFilters };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
