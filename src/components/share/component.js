import './styles.scss';
import React, { useState, useRef } from 'react';

import Modal from 'components/modal';
import Button from 'components/button';
import FacebookIcon from 'components/map/map-container/icons/share.svg';
import TwitterIcon from 'components/map/map-container/icons/share.svg';
import LinkedynIcon from 'components/map/map-container/icons/share.svg';
import EmailIcon from 'components/map/map-container/icons/share.svg';

const ShareControl = () => {
  const inputElUrl = useRef();
  const inputElEmbed = useRef();
  const url = window.location.href;

  const [{ isCopied, isOpen }, setState] = useState({
    isUrlCopied: false,
    isEmbedCopied: false,
    isOpen: false,
  });

  const handleClick = (param) => {
    const { current } = param === 'Url' ? inputElUrl : inputElEmbed;
    current.select();

    try {
      document.execCommand('copy');
      setState({ [`is${param}Copied`]: true });
      setTimeout(() => {
        setState({ [`is${param}Copied`]: false });
        current.blur();
      }, 3000);
    } catch (err) {
      console.warn('Oops, unable to copy');
    }
  };

  const toggleModal = () => {
    setState({ isOpen: !isOpen });
  };

  return (
    <div className="mapboxgl-ctrl mapboxgl-ctrl-group  map-share">
      <button className="mapboxgl-ctrl-icon" onClick={toggleModal}>
        <Modal
          title="Share"
          isOpen={isOpen}
          onRequestClose={() => toggleModal(false)}
          actionsComponent={() => (
            <div className="c-filters-action-buttons">
              <Button className="-border-color-1" onClick={toggleModal}>
                Close
            </Button>
            </div>
          )}
        >
          <div className="c-share">
            <div className="form-fields">
              <label>Public url to share</label>
              <div className="share-content">
                <input ref={inputElUrl} value={url} readOnly />

                <div className="share-controls">
                  <a
                    href={`http://www.facebook.com/sharer/sharer.php?u=${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'Facebook' || <img alt="share-facebook" src={FacebookIcon} />}
                  </a>
                  <a
                    href={`https://twitter.com/share?url=${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'Twitter' || <img alt="share-twitter" src={TwitterIcon} />}
                  </a>

                  <a
                    href={`mailto:?subject=Shared from Waterbird Estimates Population&body= I thought you'd be interested in some data: ${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'Email' || <img alt="share-email" src={EmailIcon} />}
                  </a>

                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'Linkedyn' || <img alt="share-linkedin" src={LinkedynIcon} />}
                  </a>

                  <Button className="-background -primary -medium" onClick={() => handleClick('Url')}>
                    {isCopied ? 'Copied' : 'Copy'}
                  </Button>
                </div>
              </div>
            </div>
            <div className="form-fields">
              <label>Code to embed</label>
              <div className="share-content">
                <input
                  ref={inputElEmbed}
                  value={`<iframe src="${url}" width="100%" height="500px" frameBorder="0" />`}
                  readOnly
                />
                <div className="share-controls">
                  <Button className="-background -primary -medium" onClick={() => handleClick('Embed')}>
                    {isCopied ? 'Copied' : 'Copy'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </button>
    </div>
  );
};

export default ShareControl;
