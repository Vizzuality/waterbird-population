import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/modal';

import Button from 'components/button';
import Icon from 'components/icon';

import './styles.scss';

const ShareControl = ({ isOpen, onClick, toggleModal }) => {

  const inputEl = useRef();
  const url = window.location.href;
  const [link, setLink] = useState('');

  const handleClick = () => {
    const { current } = inputEl;
    setLink(current.value)
    current.select()
    document.execCommand('copy');
  };

  return (
    <div class="mapboxgl-ctrl mapboxgl-ctrl-group  map-share">
      <button className="mapboxgl-ctrl-icon" onClick={onClick}>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => toggleModal(false)}
        >
          <div className="c-share">
            <div className="share-content">
              <h2>Copy link:</h2>
              <div className="share-controls">
                <input
                  ref={inputEl}
                  value={url}
                  readOnly
                />
                <Button
                  className="-background -primary -medium"
                  onClick={handleClick}
                >
                  {link ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </div>
          </div>
        </Modal>
        <Icon name="share" />
      </button>
    </div>

  )
};

ShareControl.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  toggleModal: PropTypes.func
};

ShareControl.defaultProps = {
  isOpen: false,
  onClick:  () => {},
  toggleModal: () => {}
};

export default ShareControl;
