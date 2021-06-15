import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/icon';

import './styles.scss';

const PopulationsSelector = ({ data, setLocation, resetPopulationsByLocation }) => {
  const handleClick = () => {
    resetPopulationsByLocation();
    setLocation(null);
  };

  return (
    <div className="c-populations-selector-map-overview">
      <div className="wrapper">
        <div className="populations-selector--content">
          <div className="populations-selector--content-info-wrapper">
            <h5>Selected population place coordinates:</h5>
            <div className="populations-selector--content-control">
              <h4>{data}</h4>
              <button
                aria-label="close-modal"
                type="button"
                className="modal-button"
                onClick={handleClick}
              >
                <Icon name="close" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PopulationsSelector.propTypes = {
  data: PropTypes.string,
  setLocation: PropTypes.func.isRequired,
  resetPopulationsByLocation: PropTypes.func.isRequired,
};

PopulationsSelector.defaultProps = {
  data: '',
};

export default PopulationsSelector;
