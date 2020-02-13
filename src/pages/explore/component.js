import React from 'react';
import MapContainer from 'components/map/map-container';
import Search from 'components/search';

import './styles.scss';

const ExplorePage = () => (
  <div className="l-explore">
    <Search />
    <MapContainer />
  </div>);

export default ExplorePage;
