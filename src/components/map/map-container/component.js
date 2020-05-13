import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { NavigationControl, FullscreenControl } from 'react-map-gl';

// Components
import Map from 'components/map';
import PopUp from 'components/map/pop-up';
import Legend from 'components/map/legend';
import ShareControl from 'components/share';

import './styles.scss';

export const MapContainer = ({
  viewport,
  setViewport,
  layers,
  mapStyle,
  map,
  bounds,
  coordinates,
  isOpen,
  setPopUp
}) => {

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return function cleanup() {
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line
  }, []);

  const onViewportChange = () => {
    const { width, height, latitude, longitude, zoom } = viewport;

  };

  const resize = () => {
    onViewportChange({
      ...viewport,
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  return (
    <div className='c-map-container'>
      <Map
        viewport={viewport}
        // bounds={bounds}
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={onViewportChange}
      // onClick={clickHandler}
      // interactiveLayerIds={interactiveLayerIds}
      //  onPopupClose={popupCloseHandler}
      >

        {(map) =>
          <Fragment>
            <LayerManager
              map={map}
              plugin={PluginMapboxGl}
            >
              {!!layers && layers.map((l, i) => {
                return (
                  <Layer
                    key={l.id}

                    {...l}
                  />
                )

              })}
            </LayerManager>

            <div className="map-controls">
              <NavigationControl className="map-navigation" />
              <FullscreenControl className="map-fullscreen" />
              <ShareControl className="map-share" />
            </div>
          </Fragment>
        }
      </Map>
      <PopUp
        setPopUp={setPopUp}
        popUpState={isOpen}
        coordinates={coordinates}/>
      <Legend />
    </div>
  );
};

MapContainer.propTypes = {
  viewport: PropTypes.shape({}),
  setViewport: PropTypes.func,
  isCollapse: PropTypes.bool.isRequired,
  mapboxApiAccessToken: PropTypes.string.isRequired,
  mapStyle: PropTypes.shape({}).isRequired,
  bounds: PropTypes.shape({}).isRequired,
  goToCountry: PropTypes.func,
  goToAOI: PropTypes.func,
  setPopup: PropTypes.func,
  removePopup: PropTypes.func
};

MapContainer.defaultProps = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    longitude: 0,
    latitude: 0,
    zoom: 2,
    maxZoom: 16,
    bearing: 0,
    pitch: 0
  },

  setViewport: () => { },
};

export default MapContainer;
