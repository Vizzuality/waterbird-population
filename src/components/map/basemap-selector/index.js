import { connect } from 'react-redux';
import { setBasemap } from 'modules/map/actions';

import Component from './component';

const mapStateToProps = state => ({
  current: state.map.selectedBasemap,
  basemaps: state.map.basemaps
})

const mapDispatchToProps = {
  setBasemap
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
