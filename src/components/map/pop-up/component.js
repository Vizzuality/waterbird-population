import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'components/icon';

import info from './constants.js';
import './styles.scss';

const PopUp = ({ popUpState, coordinates, setPopUp }) => {

  useEffect(() => {
    setPopUp(popUpState)
  }, [popUpState]);

  const handleClick = () => {
    setPopUp(!popUpState)

  }

  return (
    <div className={classnames('c-map-pop-up', {
      '-collapse': !popUpState
    })}>
      <div className="pop-up-content">
        <div className="content-info">
          <h5>Selected population place:</h5>
          <div className="content-control">
            <h4>{info.place}</h4>
            <button type="button" className="modal-button" onClick={handleClick}>
              <Icon name="close" className="-small" />
            </button>
          </div>
        </div>
        <div className="content-info">
          <h5>Coordinates:</h5>
          <p>{`${coordinates[0]}, ${coordinates[1]}`}</p>
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