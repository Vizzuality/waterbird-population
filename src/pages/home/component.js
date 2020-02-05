import React from 'react';
import Link from 'redux-first-router-link';
import MapContainer from 'components/map/map-container';

import './styles.scss';

const Home = () => (<div className="c-home">
  <Link to='/'>Home</Link>
  <MapContainer />
  <Link to='/map'>Map</Link>
</div>);

export default Home;
