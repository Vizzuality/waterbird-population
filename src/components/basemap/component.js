import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import basemaps from './constants';
import lightThumb from '';
import darkThumb from '';
import satelliteThumb from '';
import './styles.scss';

const BasemapSelector = () => {
  // useEffect((e) => {
  //   console.log(e)
  //   debugger
  //   setBasemap(e.target);
  // })

  // const thumbs = {
  //   light: lightThumb,
  //   dark: darkThumb,
  //   satellite: satelliteThumb
  // };

  // const [basemap, setBasemap] = useState(false);

  return (
    <div className='c-basemap-selector'>
      hola
      {/* <div>
        <h3>Map style</h3>
        <div>{basemap}</div>
      </div>
      <div>
        {basemaps.map(b => (
          <button
            key={b.id}
            type="button"
            data-basemap={b.id}
            onClick={setBasemap}
            className={classnames({
              // [selected]: basemap.id === b.id
            })}
          >
            <img src={thumbs[b.id]} alt={b.name} width="35px" height="45px" />
          </button>
        ))}
      </div> */}
    </div>
  );
}

BasemapSelector.propTypes = {
  basemapName: PropTypes.string,
  setBasemap: PropTypes.func
};

BasemapSelector.defaultProps = {
  basemapName: 'light',
  setBasemap: () => null
};


export default BasemapSelector;


