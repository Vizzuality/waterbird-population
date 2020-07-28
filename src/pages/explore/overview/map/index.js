import { connect } from 'react-redux';

import { activeLayers } from './constants';
import { setPopUp } from 'modules/map/actions';
// import { getActiveLayers, getActiveBoundsLayer } from 'modules/layers/selectors';

import Component from './component';

const mapStateToProps = state => ({
  // bounds: getActiveBoundsLayer(state),
  layers: activeLayers,
  coordinates: state.map.lonLat,
  isOpen: state.map.popUp
})

const mapDispatchToProps = {
  setPopUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
