import React from 'react';
import MapContainer from 'components/map/map-container';
import Button from 'components/button';
import SearchResults from 'components/search-results';
import Icon from 'components/icon';
import TableCard from 'components/table-card';
import Search from 'components/search';

import './styles.scss';

const ExplorePage = () => (
  <div className="l-explore">
    <div className="map-section">
      <MapContainer />
    </div>
    <div className="results-section">
      <Search />
      <div className="results-buttons">
        <div>
          <Button className="disabled">
            {/* <Icon name="download"/> */}
            Download results
          </Button>
        </div>
        <div className="results-filters">
          <p>Content configuration:</p>
          <Button className="collapse small" />
        </div>

      </div>
      <div className="table-results">
        <SearchResults />
        <TableCard />
      </div>

    </div>


  </div>);

export default ExplorePage;
