import React from 'react';
import MapContainer from 'components/map/map-container';
import Search from 'components/search';

import './styles.scss';

const ExplorePage = () => (
  <div className="l-explore">
    <div className="map-section">
      <MapContainer />
    </div>
    <div clasName="">
      <Search />
    </div>


  </div>);

export default ExplorePage;
