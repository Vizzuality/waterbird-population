import React, { useState } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'components/icon';

import './styles.scss';

import info from './constants.js';

const PopUp = ({  }) => {

  const [isOpen, toggleState] = useState(true);

  const handleClick = () => {
    toggleState(!isOpen)
  }

  return (
    <div className={classnames('c-map-pop-up', {
      '-collapse': !isOpen
    })}>
      <div className="pop-up-content">
        <div className="content-info">
          <h5>Selected population place:</h5>
          <div className="content-control">
            <h4>{info.place}</h4>
            <button type="button" className="modal-button" onClick={handleClick}>
              <Icon name="close" className="-huge" />
            </button>
          </div>
        </div>
        <div className="content-info">
          <h5>Coordinates:</h5>
          <p>{info.coordinates}</p>
        </div>
      </div>
    </div>
  )
};

PopUp.propTypes = {
  info: propTypes.shape({
    place: propTypes.string.isRequired,
    coordinates: propTypes.string.isRequired
  })
};

export default PopUp;
