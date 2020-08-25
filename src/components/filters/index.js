import { connect } from 'react-redux';
import { setFilters, resetFilters } from 'modules/filters/actions';

import Component from './component';

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = { setFilters, resetFilters };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
