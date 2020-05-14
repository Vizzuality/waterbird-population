import React, { useEffect, useState } from 'react';

import MapContainer from 'components/map/map-container';
import Search from 'components/search';
import DataControls from 'components/data-controls';
import DataResults from 'components/data-results';

import { fetchFamilies } from 'services/families';

import './styles.scss';

const ExplorePage = () => {

  const [families, setFamilies] = useState([])

  useEffect(() => {
    fetchFamilies().then(data=>setFamilies(data));
  }, [families]);

 return (
  <div className="l-explore">
    <div className="map-section">
      <MapContainer />
    </div>
    <div className="results-section">
      <Search  />
      <DataControls />
      {families.map(family => <DataResults family={family} />)}
    </div>
  </div>
 )
};

export default ExplorePage;
