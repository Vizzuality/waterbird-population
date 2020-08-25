import React, { useEffect, useState } from 'react';

import Search from 'components/search';
import DataControls from 'components/data-controls';
import FamilyList from 'components/family-list';
import MapContainer from './map';

// services
import { fetchPopulations } from 'services/population';

import './styles.scss';

const ExplorePage = ({ setPopulations }) => {
  useEffect(() => {
    fetchPopulations().then(data => setPopulations(data));
  }, [])

 return (
  <div className="l-explore">
    <div className="map-section">
      <MapContainer />
    </div>
    <div className="wrapper">
      <div className="results-section">
        <Search  />
        <DataControls />

        <FamilyList />
      </div>
    </div>
  </div>
 )
};

export default ExplorePage;
