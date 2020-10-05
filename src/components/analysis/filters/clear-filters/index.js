import { connect } from 'react-redux';

import { selectFiltersProps } from 'modules/explore/selectors';
import { resetFilters } from 'modules/explore/actions';
import initialState from 'modules/explore/initial-state';

import Component from './component';

const mapStateToProps = state => ({
  filtersInitialState: initialState.filters,
  ...selectFiltersProps(state),
});
const mapDispatchToProps = { resetFilters };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
