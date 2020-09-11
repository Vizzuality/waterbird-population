import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';

// Components
import Map from 'components/map';
import MapControls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import Legend from 'components/map/legend';


export const MapContainer = ({
  layers,
  scrollZoom = false
}) => {

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return function cleanup() {
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line
  }, []);

  const [viewport, setViewport] = useState({ zoom: 1, latitude: 0, longitude: 0 });

  const onViewportChange = (viewport) => {
    setViewport(viewport);
  }

  const onZoomChange = (zoom) => {
    setViewport({
      zoom,
      transitionDuration: 250
    });
  };


  const resize = () => {
    setViewport({
      ...viewport,
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  return (
    <div className='c-map-container'>
      <Map
        viewport={viewport}
        scrollZoom={scrollZoom}
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={onViewportChange}
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
          </Fragment>
        }
      </Map>

      <MapControls>
        <ZoomControl
          viewport={viewport}
          onClick={onZoomChange}
        />
      </MapControls>

      {/* <Legend /> */}
    </div>
  );
};

MapContainer.propTypes = {
  viewport: PropTypes.shape({})
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
  }
};

export default MapContainer;
