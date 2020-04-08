import React from 'react';

import MapContainer from 'components/map/map-container';
import DataControls from 'components/data-controls';
import DataDetail from 'components/data-detail';

import './styles.scss';

const ExploreDetailPage = () => {
return (
  <div className="l-explore">
    <div className="map-section">
      <MapContainer />
    </div>
    <div className="results-section">
      <DataControls />
      <DataDetail />
    </div>
  </div>
 )
};

export default ExploreDetailPage;
