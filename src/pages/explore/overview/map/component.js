import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { Popup } from 'react-map-gl'

import { getParams } from 'utils/layers';

// Components
import Map from 'components/map';
import MapControls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import Legend from 'components/map/legend';


export const MapContainer = ({
  router,
  populationsLayersByLocation,
  setRouter,
  scrollZoom = false
}) => {
  const [viewport, setViewport] = useState({ zoom: 1, latitude: 0, longitude: 0 });
  const [hoverInteractions, setHoverInteractions] = useState({});
  const [lngLat, setLngLat] = useState(null);
  const [interactiveLayerIds, setInteractiveLayerIds] = useState([]);

  const layers = populationsLayersByLocation.map(l => {
    return {
      ...l,
      params: !!lngLat && !!l.paramsConfig && getParams(l.paramsConfig, { lng: lngLat[0], lat: lngLat[1] })
    }
  });

  const onZoomChange = (zoom) => {
    setViewport({
      zoom,
      transitionDuration: 250
    });
  };
  const onAfterAdd = layerModel => {
    if (!isEmpty(layerModel.interactionConfig)) {
      layerModel.mapLayer.layers.forEach(l => {
        const { id } = l;
        if (!interactiveLayerIds.includes(id)) {
          setInteractiveLayerIds(prevInteractiveLayersIds => [...prevInteractiveLayersIds, id]);
        }
      });
    }
  };

  const onAfterRemove = layerModel => {
    if (!isEmpty(layerModel.interactionConfig)) {
      layerModel.mapLayer.layers.forEach(l => {
        const { id } = l;

        if (interactiveLayerIds.includes(id)) {
          setInteractiveLayerIds(prevInteractiveLayersIds => {
            const arr = prevInteractiveLayersIds.filter(e => e !== id);

            return arr;
          });
        }
      });
    }
  };

  return (
    <div className='c-map-container'>
      <Map
        viewport={viewport}
        scrollZoom={scrollZoom}
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        interactiveLayerIds={interactiveLayerIds}
        onClick={(e) => {
          if (e && e.features) {
            e.features.forEach(f => (
              setHoverInteractions({
                [f.source]: f.properties
              })

            ));
            setLngLat(e.lngLat);
          }
        }}
        onHover={(e) => {
          if (e && e.features) {
            e.features.forEach(f => (
              setHoverInteractions({
                [f.source]: f.properties
              })
            ));

            setLngLat(e.lngLat);
          }
       }}
        onMouseLeave={() => {
          setHoverInteractions({});
          setLngLat(null);
        }}
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
                    onAfterAdd={onAfterAdd}
                    // onAfterRemove={onAfterRemove}
                  />
                )

              })}
            </LayerManager>
            {lngLat && hoverInteractions['populations-by-location'] && (
              <Popup
                key={hoverInteractions['populations-by-location']}
                latitude={lngLat[1]}
                longitude={lngLat[0]}
                closeButton={false}
              >
                {hoverInteractions['populations-by-location'].populationname}
              </Popup>
            )}

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
