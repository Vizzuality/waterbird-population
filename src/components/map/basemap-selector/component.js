import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LightThumb from 'images/map/basemapThumbLight.png'
import SatelliteThumb from 'images/map/basemapThumbSatellite.png'

import './styles.scss';

const thumbs = {
  light: LightThumb,
  satellite: SatelliteThumb
};

const BasemapSelector = ({ current, basemaps, setBasemap }) => {

  const onChangeBasemap = (e) => {
    const selectedBasemap = e.currentTarget.dataset.basemap;
    setBasemap(selectedBasemap);
  }

  return (
    <div className="c-basemap-selector">
      <p>Map style:</p>
      <div className='options'>
        {basemaps.map(b => (
          <button
            key={b.id}
            type="button"
            data-basemap={b.id}
            onClick={onChangeBasemap}
            className={classnames('basemapThumb', {
              '-selected': current === b.id
            })}
            style={{ 'background-image': thumbs[b.id] }}
          />
        ))}
      </div>
    </div>
  );
}

BasemapSelector.propTypes = {
  current: PropTypes.string,
  basemaps: PropTypes.array,
  setBasemap: PropTypes.func.isRequired
};

BasemapSelector.defaultProps = {
  current: 'light',
  basemaps: [],
  setBasemap: () => null
};

export default BasemapSelector;
