import React, { Fragment, useState } from 'react';

import isEmpty from 'lodash/isEmpty';

import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';

import { getParams } from 'utils/layers';

// Components
import Map from 'components/map';
import Legend from 'components/map/legend';
import MapControls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import PopulationsSelector from 'components/populations-selector';


export const MapContainer = ({
  populationOptions,
  populationLayers,
  scrollZoom = false,
  router,
  setRouter
}) => {
  const [viewport, setViewport] = useState({ zoom: 3, latitude: 0, longitude: 0 });
  const [interactiveLayerIds, setInteractiveLayerIds] = useState([]);

  const parsedLayers = populationLayers.map(l => {
    return {
      ...l,
      params: !!l.paramsConfig && getParams(l.paramsConfig, { specieid: router.payload.specie_id })
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
      <PopulationsSelector
        data={populationOptions}
        selected={router.payload.population_id}
        onChange={(value) => {
          setRouter('EXPLORE_DETAIL', {
            specie_id: router.payload.specie_id,
            population_id: value
          })
        }}
      />
      <Map
        viewport={viewport}
        scrollZoom={scrollZoom}
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        interactiveLayerIds={interactiveLayerIds}
        onClick={(e) => {
          if (e && e.features) {
            const { id } = e.features[0];

            setRouter('EXPLORE_DETAIL', {
              specie_id: router.payload.specie_id,
              population_id: id
            })
          }
        }}
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
          </Fragment>
        }
      </Map>

      <MapControls>
        <ZoomControl
          viewport={viewport}
          onClick={onZoomChange}
        />
      </MapControls>

      <Legend />
    </div>
  );
};

MapContainer.propTypes = {
};

MapContainer.defaultProps = {
};

export default MapContainer;
