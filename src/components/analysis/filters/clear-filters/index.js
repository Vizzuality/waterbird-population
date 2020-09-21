import { connect } from 'react-redux';

import { selectFiltersProps } from 'modules/population/selectors';
import { resetFilters } from 'modules/population/actions';
import initialState from 'modules/population/initial-state';

import Component from './component';

const mapStateToProps = state => ({
  filtersInitialState: initialState.filters,
  ...selectFiltersProps(state),
});
const mapDispatchToProps = { resetFilters };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
