import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Tooltip from '@tippyjs/react';

import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

import ReactMapGL, { FlyToInterpolator, TRANSITION_EVENTS } from 'react-map-gl';
import { fitBounds } from 'viewport-mercator-project';

import { easeCubic } from 'd3-ease';

import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.scss';

const DEFAULT_VIEWPORT = {
  zoom: 2,
  minZoom: 1,
  maxZoom: 10,
  latitude: 40,
  longitude: 10,
};

class Map extends Component {
  events = {};
  HOVER = {};

  static propTypes = {
    /** A function that returns the map instance */
    children: PropTypes.func,

    /** Custom css class for styling */
    customClass: PropTypes.string,

    /** An object that defines the viewport
     * @see https://uber.github.io/react-map-gl/#/Documentation/api-reference/interactive-map?section=initialization
     */
    viewport: PropTypes.shape({}),

    /** An object that defines the bounds */
    bounds: PropTypes.shape({
      bbox: PropTypes.array,
      options: PropTypes.shape({}),
    }),

    /** A boolean that allows panning */
    dragPan: PropTypes.bool,

    /** A boolean that allows rotating */
    dragRotate: PropTypes.bool,

    /** A boolean that allows zooming */
    scrollZoom: PropTypes.bool,

    /** A boolean that allows zooming */
    touchZoom: PropTypes.bool,

    /** A boolean that allows touch rotating */
    touchRotate: PropTypes.bool,

    /** A boolean that allows double click zooming */
    doubleClickZoom: PropTypes.bool,

    /** A function that exposes when the map is ready. It returns and object with the `this.map` and `this.mapContainer` reference. */
    onReady: PropTypes.func,

    /** A function that exposes when the cursor is out of the map. */
    onMouseOut: PropTypes.func,

    /** A function that exposes when the map is loaded. It returns and object with the `this.map` and `this.mapContainer` reference. */
    onLoad: PropTypes.func,

    /** A function that exposes when the mouse moves over the map. */
    onHover: PropTypes.func,

    /** A function that exposes the viewport */
    onViewportChange: PropTypes.func,

    /** A function that exposes the viewport */
    getCursor: PropTypes.func,

    /** A boolean that prevents an error in Firefox print view */
    /** If true , the map's canvas can be exported to a PNG using map.getCanvas().toDataURL() .
     * False by default as a performance optimization. */
    preserveDrawingBuffer: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    customClass: null,
    viewport: DEFAULT_VIEWPORT,
    bounds: {},
    dragPan: true,
    dragRotate: true,

    onViewportChange: () => {},
    onLoad: () => {},
    onHover: () => {},
    onReady: () => {},
    getCursor: ({ isHovering, isDragging }) => {
      if (isHovering) return 'pointer';
      if (isDragging) return 'grabbing';
      return 'grab';
    },
  };

  state = {
    viewport: {
      ...DEFAULT_VIEWPORT,
      ...this.props.viewport // eslint-disable-line
    },
    flying: false,
    loaded: false,
    tooltip: null,
    mousePosition: null,
  };

  componentDidMount() {
    const { bounds, onReady } = this.props;
    if (!isEmpty(bounds) && !!bounds.bbox && bounds.bbox.every((b) => !!b)) {
      this.fitBounds(0);
    }

    onReady({
      map: this.map,
      mapContainer: this.mapContainer,
    });
  }

  componentDidUpdate(prevProps) {
    const { viewport: prevViewport, bounds: prevBounds } = prevProps;
    const { viewport, bounds } = this.props;
    const { viewport: stateViewport } = this.state;

    if (
      !isEmpty(bounds) &&
      !isEqual(bounds, prevBounds) &&
      !!bounds.bbox &&
      bounds.bbox.every((b) => !!b)
    ) {
      this.fitBounds();
    }

    if (!isEqual(viewport, prevViewport)) {
      this.setState({
        // eslint-disable-line
        viewport: {
          ...stateViewport,
          ...viewport,
        },
      });
    }
  }

  onLoad = () => {
    const { onLoad } = this.props;
    this.setState({ loaded: true });

    onLoad({
      map: this.map,
      mapContainer: this.mapContainer,
    });
  };

  onHover = (e) => {
    const { onHover } = this.props;
    const { mousePosition, tooltip } = this.state;
    const { features } = e;
    if (features && features.length) {
      const {
        id,
        source,
        sourceLayer,
        properties: { populationname },
      } = features[0];
      if (populationname && populationname !== this.state.tooltip) {
        this.setState({ tooltip: populationname, mousePosition: e.center });
      }

      if (this.HOVER.id) {
        this.map.setFeatureState(
          {
            ...this.HOVER,
          },
          { hover: false }
        );
      }

      if (id && source) {
        this.HOVER = {
          id,
          source,
          ...(sourceLayer && { sourceLayer }),
        };

        this.map.setFeatureState(
          {
            ...this.HOVER,
          },
          { hover: true }
        );
      }
    } else {
      if (tooltip || mousePosition) {
        this.setState({ tooltip: null, mousePosition: null });
      }
    }

    if (onHover) onHover(e);
  };

  onClick = (e) => {
    const { onClick } = this.props;
    if (onClick) onClick(e);
  };

  onMouseOut = (e) => {
    const { onMouseOut } = this.props;
    if (onMouseOut) onMouseOut(e);
  };

  onMouseLeave = (e) => {
    const { onMouseLeave } = this.props;

    if (this.HOVER.id) {
      this.map.setFeatureState(
        {
          ...this.HOVER,
        },
        { hover: false }
      );
    }

    this.HOVER = {};

    if (onMouseLeave) onMouseLeave(e);
  };

  onViewportChange = (v) => {
    const { onViewportChange } = this.props;
    this.setState({ viewport: v });
    onViewportChange(v);
  };

  onResize = (v) => {
    const { onViewportChange } = this.props;
    const { viewport } = this.state;
    const newViewport = {
      ...viewport,
      ...v,
    };

    this.setState({ viewport: newViewport });
    onViewportChange(newViewport);
  };

  onMoveEnd = () => {
    const { onViewportChange } = this.props;
    const { viewport } = this.state;

    if (this.map) {
      const bearing = this.map.getBearing();
      const pitch = this.map.getPitch();
      const zoom = this.map.getZoom();
      const { lng, lat } = this.map.getCenter();

      const newViewport = {
        ...viewport,
        bearing,
        pitch,
        zoom,
        latitude: lat,
        longitude: lng,
      };

      // Publish new viewport and save it into the state
      this.setState({ viewport: newViewport });
      onViewportChange(newViewport);
    }
  };

  fitBounds = (transitionDuration = 2500) => {
    const { bounds, onViewportChange } = this.props;
    const { bbox, options } = bounds;

    const { longitude, latitude, zoom } = fitBounds({
      width: this.mapContainer.offsetWidth,
      height: this.mapContainer.offsetHeight,
      bounds: [
        [bbox[0], bbox[1]],
        [bbox[2], bbox[3]],
      ],
      ...options,
    });

    const newViewport = {
      ...this.state.viewport,
      longitude,
      latitude,
      zoom,
      transitionDuration,
      transitionInterruption: TRANSITION_EVENTS.UPDATE,
    };

    this.setState({
      flying: true,
      viewport: newViewport,
    });
    onViewportChange(newViewport);

    setTimeout(() => {
      this.setState({ flying: false });
    }, transitionDuration);
  };

  render() {
    const {
      customClass,
      children,
      getCursor,
      dragPan,
      dragRotate,
      scrollZoom,
      touchZoom,
      touchRotate,
      doubleClickZoom,
      preserveDrawingBuffer,
      mapboxApiAccessToken,
      ...mapboxProps
    } = this.props;
    const { viewport, loaded, flying, tooltip, mousePosition } = this.state;
    return (
      <div
        ref={(r) => {
          this.mapContainer = r;
        }}
        className={classnames({
          'c-map': true,
          [customClass]: !!customClass,
        })}
      >
        {mousePosition && (
          <Tooltip
            key={`tooltip-${tooltip}`}
            delay={0}
            arrow={false}
            visible={tooltip}
            content={
              <div className="map-tooltip" style={{ top: mousePosition.y, left: mousePosition.x }}>
                {tooltip}
              </div>
            }
          />
        )}
        <ReactMapGL
          ref={(map) => {
            this.map = map && map.getMap();
          }}
          mapboxApiAccessToken={mapboxApiAccessToken}
          // CUSTOM PROPS FROM REACT MAPBOX API
          {...mapboxProps}
          // VIEWPORT
          {...viewport}
          width="100%"
          height="100%"
          // INTERACTIVE
          dragPan={!flying && dragPan}
          dragRotate={!flying && dragRotate}
          scrollZoom={!flying && scrollZoom}
          touchZoom={!flying && touchZoom}
          touchRotate={!flying && touchRotate}
          doubleClickZoom={!flying && doubleClickZoom}
          // DEFAULT FUNC IMPLEMENTATIONS
          onViewportChange={this.onViewportChange}
          onResize={this.onResize}
          onLoad={this.onLoad}
          onHover={this.onHover}
          onMouseOut={this.onMouseOut}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
          getCursor={getCursor}
          transitionInterpolator={new FlyToInterpolator()}
          transitionEasing={easeCubic}
          preserveDrawingBuffer={preserveDrawingBuffer || false}
        >
          {loaded && !!this.map && typeof children === 'function' && children(this.map)}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
