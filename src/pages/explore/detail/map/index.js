import { connect } from 'react-redux';

import { activeLayers } from './constants';
import { setPopUp } from 'modules/map/actions';
// import { getActiveLayers, getActiveBoundsLayer } from 'modules/layers/selectors';

import Component from './component';

const mapStateToProps = state => ({
  router: state.router,
  layers: activeLayers
})

export default connect(mapStateToProps, null)(Component);
