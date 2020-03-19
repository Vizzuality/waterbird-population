import React, { useState } from 'react';
import classnames from 'classnames';

import BasemapSelector from 'components/map/basemap-selector';

import activeFlyways from './constants';
import './styles.scss';

const Legend = () => {

  const [isCollapse, toggleCollapse] = useState(true);

  const handleClick = () => {
    toggleCollapse(!isCollapse)
  }

  return (
    <div className={classnames('c-map-legend',
      { ['-collapse']: isCollapse }) }>
      <div className="legend-header">
        <div className="legend-controls">
          <h4>Map settings</h4>
          <button
            type="button"
            onClick={handleClick}
            className={classnames(
              { ['-collapse']: isCollapse },
              { ['-expand']: !isCollapse })} />
        </div>
        <BasemapSelector />
      </div>
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
