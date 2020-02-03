
import { connect } from 'react-redux';

import MapContainer from './component';
import { activeLayers } from './constants';



// import { getActiveLayers, getActiveBoundsLayer } from 'modules/layers/selectors';

export default connect(
  state => ({
    // bounds: getActiveBoundsLayer(state),
    layers: activeLayers

  })
)(MapContainer);
