import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { NavigationControl, FullscreenControl } from 'react-map-gl';
import classnames from 'classnames';


// Components
import Map from 'components/map';
// import BasemapSelector from 'components/basemap-selector';
// import Legend from 'components/map-legend';

import styles from './styles.scss';

export const MapContainer = ({
  viewport,
  layers,
  setViewport,
  mapStyle,
  bounds
}) => {
  // const onViewportChange = (newViewport) => {
  //   setViewport(pick(newViewport, ['latitude', 'longitude', 'zoom', 'bearing', 'pitch']));
  // };

  // const resize = () => {
  //   onViewportChange({
  //     ...viewport,
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', resize);
  //   resize();

  //   return function cleanup() {
  //     window.removeEventListener('resize', resize);
  //   };
  //   // eslint-disable-next-line
  // }, []);





  return (
    <div className=''>
      <Map
        viewport={viewport}
        // bounds={bounds}
        // mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      // onViewportChange={onViewportChange}
      // onClick={clickHandler}
      // interactiveLayerIds={interactiveLayerIds}
      // onPopupClose={popupCloseHandler}
      >
        {map => (
          <Fragment>
            <LayerManager
              map={map}
              plugin={PluginMapboxGl}
            // onLayerLoading={loading => setMapLoading(loading)}
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
            {/*
            {shouldRenderPopup &&
              <Popup
                {...interactionLatLng}
                closeButton
                closeOnClick={false}
                onClose={this.handleClosePopup}
                className="rw-popup-layer"
                maxWidth="250px"
              >
                <LayerPopup
                  data={layerPopupData}
                  latlng={layerPopupLatlng}
                  onChangeInteractiveLayer={setLayerInteractionSelected}
                />
              </Popup>
            } */}
          </Fragment>
        )}

      </Map>
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
