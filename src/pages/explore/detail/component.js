import React from 'react';

import DataControls from 'components/data-controls';
import DataDetail from 'components/data-detail';

import MapContainer from './map';

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
