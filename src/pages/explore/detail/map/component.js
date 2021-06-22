import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import isEmpty from 'lodash/isEmpty';

import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { Popup } from 'react-map-gl';

import { getParams } from 'utils/layers';

// Components
import Map from 'components/map';
import Legend from 'components/map/legend';
import MapControls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import PopulationsSelector from 'pages/explore/detail/map/populations-selector';

// services
import { fetchPopulationsBBox } from 'services/population';

export const MapContainer = ({
  populationOptions,
  populationLayers,
  scrollZoom = false,
  router,
  setRouter,
  basemap,
}) => {
  const [viewport, setViewport] = useState({ zoom: 1, latitude: 40, longitude: 10 });
  const [bounds, setBounds] = useState(null);
  const [hoverInteractions, setHoverInteractions] = useState({});
  const [lngLat, setLngLat] = useState(null);
  const [interactiveLayerIds, setInteractiveLayerIds] = useState([]);

  const pop_id = router.payload.population_id;

  useEffect(() => {
    fetchPopulationsBBox(pop_id).then(({ data }) => {
      const { xmax = 179, xmin = -179, ymax = 89, ymin = -89 } = data;
      setBounds({
        bbox: [xmin, ymin, xmax, ymax],
        options: {
          padding: 50,
        },
      });
    });
  }, [pop_id]);

  const parsedLayers = populationLayers.map((l) => {
    return {
      ...l,
      params: !!l.paramsConfig && getParams(l.paramsConfig, { specieid: router.payload.specie_id }),
    };
  });

  const onZoomChange = (zoom) => {
    setViewport({
      ...viewport,
      zoom,
      transitionDuration: 250,
    });
  };

  const onAfterAdd = (layerModel) => {
    if (!isEmpty(layerModel.interactionConfig)) {
      layerModel.mapLayer.layers.forEach((l) => {
        const { id } = l;

        if (!interactiveLayerIds.includes(id)) {
          setInteractiveLayerIds((prevInteractiveLayersIds) => [...prevInteractiveLayersIds, id]);
        }
      });
    }
  };

  const onAfterRemove = (layerModel) => {
    if (!isEmpty(layerModel.interactionConfig)) {
      layerModel.mapLayer.layers.forEach((l) => {
        const { id } = l;

        if (interactiveLayerIds.includes(id)) {
          setInteractiveLayerIds((prevInteractiveLayersIds) => {
            const arr = prevInteractiveLayersIds.filter((e) => e !== id);

            return arr;
          });
        }
      });
    }
  };

  return (
    <div className="c-map-container">
      <PopulationsSelector
        data={populationOptions}
        selected={+router.payload.population_id}
        onChange={(value) => {
          setRouter('EXPLORE_DETAIL', {
            specie_id: router.payload.specie_id,
            population_id: value,
          });
        }}
      />
      <Map
        viewport={viewport}
        bounds={bounds}
        scrollZoom={scrollZoom}
        mapStyle={basemap}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        preserveDrawingBuffer={true}
        interactiveLayerIds={interactiveLayerIds}
        onClick={(e) => {
          if (e && e.features && e.features[0]) {
            const { id } = e.features[0];
            setRouter('EXPLORE_DETAIL', {
              specie_id: router.payload.specie_id,
              population_id: id,
            });
          }
        }}
        onHover={(e) => {
          if (e && e.features) {
            e.features.forEach((f) =>
              setHoverInteractions({
                [f.source]: f.properties,
              })
            );
          }
        }}
        onMouseLeave={() => {
          setHoverInteractions({});
          setLngLat(null);
        }}
      >
        {(map) => (
          <Fragment>
            <LayerManager map={map} plugin={PluginMapboxGl}>
              {!!parsedLayers &&
                parsedLayers.map((l) => {
                  return (
                    <Layer
                      key={l.id}
                      {...l}
                      onAfterAdd={onAfterAdd}
                      onAfterRemove={onAfterRemove}
                    />
                  );
                })}
            </LayerManager>

            {lngLat && hoverInteractions['populations-by-specie'] && (
              <Popup
                key={hoverInteractions['populations-by-specie'].wpepopid}
                latitude={lngLat[1]}
                longitude={lngLat[0]}
                closeButton={false}
              >
                {hoverInteractions['populations-by-specie'].populationname}
              </Popup>
            )}
          </Fragment>
        )}
      </Map>

      <MapControls>
        <ZoomControl viewport={viewport} onClick={onZoomChange} />
      </MapControls>
      <Legend />
    </div>
  );
};

MapContainer.propTypes = {
  router: PropTypes.shape({
    payload: PropTypes.shape({
      population_id: PropTypes.number,
      specie_id: PropTypes.number,
    }),
  }).isRequired,
  scrollZoom: PropTypes.bool,
  setRouter: PropTypes.func.isRequired,
  basemap: PropTypes.string.isRequired,
  populationOptions: PropTypes.shape({}).isRequired,
  populationLayers: PropTypes.array.isRequired,
};

MapContainer.defaultProps = {
  scrollZoom: false,
};

export default MapContainer;
