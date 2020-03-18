import React from 'react';
import BasemapSelector from 'components/map/basemap-selector';

import activeFlyways from './constants';
import './styles.scss';

const Legend = () => {
  return (
    <div className="c-map-legend ">
      <h4>Map settings</h4>
      <BasemapSelector />
      <ul>
        {activeFlyways.map(flyway=>
          <li key={flyway.id}>
            <span style={{ backgroundColor: flyway.color }} />
            <p>{flyway.layer}</p>
          </li>
        )}
      </ul>
    </div>
  )
};

export default Legend;
