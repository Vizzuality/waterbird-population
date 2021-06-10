import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Search from 'components/search';
import DataControls from 'components/data-controls';
import FamilyList from 'components/family-list';
import UrlComponent from 'components/url';
import { URL_PROPS } from './url';
import MapContainer from './map';

// services
import { fetchPopulations } from 'services/population';

import '../styles.scss';

const ExplorePage = ({ setPopulations }) => {
  useEffect(() => {
    fetchPopulations().then((data) => setPopulations(data));
  }, [setPopulations]);

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
          <DataControls type="overview" />
          <FamilyList />
        </div>
      </div>
    </div>
  );
};

ExplorePage.propTypes = {
  setPopulations: PropTypes.func.isRequired,
};

export default ExplorePage;
