import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import isEmpty from 'lodash/isEmpty';

import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { NavigationControl, FullscreenControl } from 'react-map-gl';

import { getParams } from 'utils/layers';

// Components
import Map from 'components/map';
import Legend from 'components/map/legend';
import ShareControl from 'components/share';

export const MapContainer = ({
  layers,
  scrollZoom = false,
  router
}) => {
  const [interactiveLayerIds, setInteractiveLayerIds] = useState([]);

  const parsedLayers = layers.map(l => {
    return {
      ...l,
      params: !!l.paramsConfig && getParams(l.paramsConfig, { specieid: router.payload.specie_id })
    }
  });

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
        scrollZoom={scrollZoom}
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        interactiveLayerIds={interactiveLayerIds}
      >

        {(map) =>
          <Fragment>
            <LayerManager
              map={map}
              plugin={PluginMapboxGl}
            >
              {!!parsedLayers && parsedLayers.map((l, i) => {
                return (
                  <Layer
                    key={l.id}
                    {...l}
                    onAfterAdd={onAfterAdd}
                    onAfterRemove={onAfterRemove}
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
      <Legend />
    </div>
  );
};

MapContainer.propTypes = {
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
};

export default MapContainer;
