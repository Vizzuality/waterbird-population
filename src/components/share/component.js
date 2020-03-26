import React, { useState, useRef } from 'react';

import Modal from 'components/modal';
import Button from 'components/button';

import './styles.scss';

const ShareControl = () => {
  const inputEl = useRef();
  const url = window.location.href;
  const [{ isCopied, isOpen }, setState] = useState(
    { isCopied: false, isOpen: false }
    );

  const handleClick = () => {
    const { current } = inputEl;
    current.select()

    try {
      document.execCommand('copy');
      setState({ isCopied: true })
      setTimeout(() => {
        setState({ isCopied: false })
        current.blur();
      }, 3000);
    } catch (err) {
      console.warn('Oops, unable to copy');
    }
  };

  const handleModal = () => {
    setState({ isOpen: !isOpen })
  }


  return (
    <div class="mapboxgl-ctrl mapboxgl-ctrl-group  map-share">
      <button className="mapboxgl-ctrl-icon" onClick={handleModal}>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setState({ isOpen: false })}
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
                  {isCopied ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </button>
    </div>
  )
};

export default ShareControl;
