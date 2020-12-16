import React, { useEffect } from 'react';

import Search from 'components/search';
import DataControls from 'components/data-controls';
import FamilyList from 'components/family-list';
import UrlComponent from 'components/url';
import { URL_PROPS } from './url';
import MapContainer from './map';

// services
import { fetchPopulations } from 'services/population';


import '../styles.scss';

const ExplorePage = ({ setPopulations, filters }) => {

  useEffect(() => {
    fetchPopulations().then((data) => setPopulations(data));
  }, [])

  return (
    <div className="l-explore">
      <UrlComponent urlProps={URL_PROPS} />
      <div className="map-section">
        <div className="wrapper">
          <MapContainer />
        </div>
      </div>
      <div className="wrapper">
        <div className="results-section -large">
          <Search />
          <DataControls type='overview' />
          <FamilyList />
        </div>
      </div>
    </div>
  )
};

export default ExplorePage;
