import { connect } from 'react-redux';

import { selectPopulationProps } from 'modules/explore/selectors';
import { resetFilters, resetPopulationsByLocation, resetSearch } from 'modules/explore/actions';
import { resetLocation } from 'modules/map/actions';


import Component from './component';

const mapStateToProps = state => ({
  search: state.population.search,
  lonLat: state.map.lonLat,
  page: state.router.type,
  ...selectPopulationProps(state),
});

const mapDispatchToProps = { resetFilters, resetPopulationsByLocation, resetLocation, resetSearch };


export default connect(mapStateToProps, mapDispatchToProps)(Component);
