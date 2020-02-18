import React from 'react';
import MapContainer from 'components/map/map-container';
import Button from 'components/button';
import Icon from 'components/icon';
import TableCardInfo from 'components/table-card';
import Search from 'components/search';

import './styles.scss';

const ExplorePage = () => (
  <div className="l-explore">
    <div className="map-section">
      <MapContainer />
    </div>
    <div className="table-section">
      <Search />
      <div className="table-control">
        <div>
          <Button className="disabled">
            {/* <Icon name="download"/> */}
            Download results
          </Button>
        </div>
        <div>
          <p>Content configuration:</p>
          <div className="content-info">

          </div>
        </div>

      </div>
      <div className="table-results">
        <TableCardInfo />
      </div>

    </div>


  </div>);

export default ExplorePage;
