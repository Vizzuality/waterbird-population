import React, { useEffect } from 'react';

// services
import { fetchPopulations } from 'services/population';

import DataControls from 'components/data-controls';
import DataDetail from 'components/data-detail';
import UrlComponent from 'components/url';

import { URL_PROPS } from './url';

import MapContainer from './map';


import '../styles.scss';

const ExploreDetailPage = (props) => {
  const { router: { payload }, setPopulations, user } = props;
  const { specie_id } = payload;

  useEffect(() => {
    fetchPopulations(+specie_id).then((data)=> setPopulations(data));
  }, [specie_id])

  return (
    <div className="l-explore">
      <UrlComponent urlProps={URL_PROPS} />
      <div className="map-section">
        <div className="wrapper">
          <MapContainer />
        </div>
      </div>
      <div className="wrapper">
        <div className="results-section">
          <DataControls />
          <DataDetail user={user} />
        </div>
      </div>
    </div>
  )
};

export default ExploreDetailPage;
