import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'components/icon';

import './styles.scss';

class ZoomControl extends PureComponent {
  static propTypes = {
    viewport: PropTypes.shape({}).isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
  };

  increaseZoom = (e) => {
    e.stopPropagation();
    const { viewport, onClick } = this.props;
    const { zoom, maxZoom } = viewport;
    onClick(zoom >= maxZoom ? maxZoom : zoom + 1);
  };

  decreaseZoom = (e) => {
    e.stopPropagation();
    const { viewport, onClick } = this.props;
    const { zoom, minZoom } = viewport;
    onClick(zoom <= minZoom ? minZoom : zoom - 1);
  };

  render() {
    const { className, viewport } = this.props;
    const { zoom, maxZoom, minZoom } = viewport;

    const classNames = classnames({
      'c-zoom-control': true,
      [className]: !!className,
    });

    const zoomInClass = classnames('zoom-control--btn', { '-disabled': zoom >= maxZoom });
    const zoomOutClass = classnames('zoom-control--btn', { '-disabled': zoom <= minZoom });

    return (
      <div className={classNames}>
        <button
          aria-label="zoom in"
          className={zoomInClass}
          type="button"
          disabled={zoom === maxZoom}
          onClick={this.increaseZoom}
        >
          <Icon name="zoomin" className="-small" />
        </button>
        <button
          aria-label="zoom out"
          className={zoomOutClass}
          type="button"
          disabled={zoom === minZoom}
          onClick={this.decreaseZoom}
        >
          <Icon name="zoomout" className="-small" />
        </button>
      </div>
    );
  }
}

ZoomControl.propTypes = {
  viewport: PropTypes.shape({
    zoom: PropTypes.number,
    maxZoom: PropTypes.number,
    minZoom: PropTypes.number,
  }).isRequired,
};

export default ZoomControl;
