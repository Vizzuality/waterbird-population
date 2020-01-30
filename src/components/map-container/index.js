
import { connect } from 'react-redux';

import MapContainer from './component';



// import { getActiveLayers, getActiveBoundsLayer } from 'modules/layers/selectors';

export default connect(
  state => ({
    // bounds: getActiveBoundsLayer(state),
    // layers: getActiveLayers(state)

  })
)(MapContainer);
