import React from 'react';
import Link from 'redux-first-router-link';
import MapContainer from 'components/map-container';

import './styles.scss';

const Map = () => (<div className="map">
  <Link to='/'>Home</Link>
  <Link to='/map'>Map</Link>

  <MapContainer />
</div>);

export default Map;
