import React, { useState } from 'react';
import classnames from 'classnames';

import BasemapSelector from 'components/map/basemap-selector';

import './styles.scss';

const Legend = () => {

  const [isCollapse, toggleCollapse] = useState(true);

  const handleClick = () => {
    toggleCollapse(!isCollapse)
  }

  return (
    <div className="c-map-legend">
      <div className={classnames('map-legend-wrapper',
      { '-collapse': isCollapse })}>
        <div className="legend-header">
          <div className="legend-controls">
            <h4>Map settings</h4>
            <button
              aria-label="show-settings"
              type="button"
              onClick={handleClick}
              className={classnames(
                { '-collapse': isCollapse },
                { '-expand': !isCollapse })} />
          </div>
          <BasemapSelector />
        </div>
      </div>
    </div>
  )
};

export default Legend;
