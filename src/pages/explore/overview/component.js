import React, { useEffect, useState } from 'react';

import Search from 'components/search';
import DataControls from 'components/data-controls';
import DataResults from 'components/data-results';
import Spinner from 'components/spinner';
import MapContainer from './map';

import { fetchFamilies } from 'services/families';

import './styles.scss';

const ExplorePage = () => {

  const [families, setFamilies] = useState([])

  useEffect(() => {
    fetchFamilies().then(data=>setFamilies(data));
  }, []);

 return (
  <div className="l-explore">
    <div className="map-section">
      <MapContainer />
    </div>
    <div className="wrapper">
      <div className="results-section">
        <Search  />
        <DataControls />
        {families && families.length < 0
          ? families.map(family => <DataResults family={family} />)
          : <Spinner />
        }
      </div>
    </div>
  </div>
 )
};

export default ExplorePage;
