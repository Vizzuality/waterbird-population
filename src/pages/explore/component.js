import React from 'react';

import Button from 'components/button';
import Icon from 'components/icon';

import MapContainer from 'components/map/map-container';
import Search from 'components/search';
import DataControls from 'components/data-controls';
import DataDetail from 'components/data-detail';

import './styles.scss';

const ExplorePage = () => (
  <div className="l-explore">
    <div className="map-section">
      <MapContainer />
    </div>
    <div className="results-section">
      <Search />
      <DataControls />
      <DataDetail />
    </div>


  </div>);

export default ExplorePage;
