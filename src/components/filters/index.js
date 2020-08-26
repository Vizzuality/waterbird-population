import { connect } from 'react-redux';
import { setFilters } from 'modules/population/actions';

import Component from './component';

const mapStateToProps = state => ({
  filters: state.population.filters,
});

const mapDispatchToProps = { setFilters };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
