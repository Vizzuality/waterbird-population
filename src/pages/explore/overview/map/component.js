import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { format } from 'd3-format';

import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { Popup } from 'react-map-gl';

import { fetchPopulationsByLocation } from 'services/population';

// Components
import Map from 'components/map';
import MapControls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import PopulationsSelector from './populations-selector';
import PopulationsMessage from './populations-message';
import Legend from 'components/map/legend';

export const MapContainer = ({
  coordinates,
  populationsLayersByLocation,
  loadingLocation,
  dataLocation,
  populationsNumber,
  setPopulationsByLocation,
  setLocation,
  search,
  scrollZoom = false,
  basemap,
}) => {
  const [viewport, setViewport] = useState({ zoom: 1, latitude: 40, longitude: 10 });
  const [hoverInteractions, setHoverInteractions] = useState({});
  const [interactiveLayerIds, setInteractiveLayerIds] = useState([]);

  useEffect(() => {
    coordinates &&
      fetchPopulationsByLocation(coordinates[0], coordinates[1]).then((data) =>
        setPopulationsByLocation(data)
      );
  }, [coordinates, setPopulationsByLocation]);

  const layers = populationsLayersByLocation.map((l) => {
    return {
      ...l,
    };
  });

  const onZoomChange = (zoom) => {
    setViewport({
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

  const numberFormat = format(',.2f');
  const data =
    coordinates && `${numberFormat(coordinates[0])}, ${' '} ${numberFormat(coordinates[1])}`;

  return (
    <div className="c-map-container map-detail-container">
      {!coordinates && <PopulationsMessage data="Click on map to reveal relevant populations" />}
      {coordinates && <PopulationsSelector data={data} />}
      <Map
        viewport={viewport}
        scrollZoom={scrollZoom}
        mapStyle={basemap}
        className="explore-overview"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        interactiveLayerIds={interactiveLayerIds}
        onClick={(e) => {
          if (e && e.features) {
            e.features.forEach((f) =>
              setHoverInteractions({
                [f.source]: f.properties,
              })
            );
          }
          setLocation(e.lngLat);
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
        }}
      >
        {(map) => (
          <Fragment>
            <LayerManager map={map} plugin={PluginMapboxGl}>
              {!!layers &&
                layers.map((l) => {
                  return <Layer key={l.id} {...l} onAfterAdd={onAfterAdd} />;
                })}
            </LayerManager>
            {coordinates && hoverInteractions['populations-by-location'] && !loadingLocation && (
              <Popup
                key={hoverInteractions['populations-by-location']}
                latitude={coordinates[1]}
                longitude={coordinates[0]}
                className="-map-pop-up"
                closeButton={false}
              >
                {populationsNumber &&
                  populationsNumber.length === 1 &&
                  `There is one population overlapping with this location.`}
                {!loadingLocation &&
                  !!dataLocation.length &&
                  populationsNumber.length > 1 &&
                  `${populationsNumber.length} overlap with this location`}
                {!loadingLocation &&
                  populationsNumber.length === 0 &&
                  (search.length === 0
                    ? 'There are no populations overlapping with this location'
                    : 'There are no populations overlapping with this location matching your search')}
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
  viewport: PropTypes.shape({}),
  coordinates: PropTypes.arrayOf(PropTypes.number),
  populationsLayersByLocation: PropTypes.arrayOf(PropTypes.shape({})),
  loadingLocation: PropTypes.bool,
  dataLocation: PropTypes.arrayOf(PropTypes.shape({})),
  populationsNumber: PropTypes.array,
  setPopulationsByLocation: PropTypes.func,
  setLocation: PropTypes.func,
  scrollZoom: PropTypes.bool,
  basemap: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

MapContainer.defaultProps = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    longitude: 0,
    latitude: 20,
    zoom: 2,
    maxZoom: 16,
    bearing: 0,
    pitch: 0,
  },
};

export default MapContainer;
