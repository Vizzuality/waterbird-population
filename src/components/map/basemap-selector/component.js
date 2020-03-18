import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { basemaps } from './constants';
import LightThumb from 'images/map/basemapThumbLight.png'
import SatelliteThumb from 'images/map/basemapThumbSatellite.png'

import './styles.scss';

const thumbs = {
  light: LightThumb,
  satellite: SatelliteThumb
};

const BasemapSelector = ({ current, setBasemap }) => {


  const onChangeBasemap = (e) => {
    const selectedBasemap = e.currentTarget.dataset.basemap;

    setBasemap(selectedBasemap);
  }

const currentBasemap = 'light';
  //const currentBasemap = basemaps.find(b => b.id === basemapName);

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
              ['selected']: currentBasemap.id === b.id
            })}
          >
            <img src={thumbs[b.id]} alt={b.name} width="35px" height="45px" />
          </button>
        ))}
      </div>
    </div>
  );

}

BasemapSelector.propTypes = {
  basemapName: PropTypes.string,
  setBasemap: PropTypes.func,
  isCollapsed: PropTypes.bool.isRequired,
  mapView: PropTypes.bool.isRequired
};

BasemapSelector.defaultProps = {
  basemapName: 'light',
  setBasemap: () => null
};

export default BasemapSelector;
