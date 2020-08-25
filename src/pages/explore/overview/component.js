import React, { useEffect, useState } from 'react';

import Search from 'components/search';
import DataControls from 'components/data-controls';
import DataResults from 'components/data-results';
import Spinner from 'components/spinner';
import MapContainer from './map';

// services
import { fetchPopulations } from 'services/population';

import './styles.scss';

const ExplorePage = ({ populationFamilies, setPopulations }) => {
  useEffect(() => {
    fetchPopulations().then(data => setPopulations(data));
  }, [])

  console.log(populationFamilies);

 return (
  <div className="l-explore">
    <div className="map-section">
      <MapContainer />
    </div>
    <div className="wrapper">
      <div className="results-section">
        <Search  />
        <DataControls />
        {populationFamilies && populationFamilies.length > 0
          ? populationFamilies.map(family => <DataResults key={family.id} family={family} />)
          : <Spinner />
        }
      </div>
    </div>
  </div>
 )
};

export default ExplorePage;
