import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/modal';

import BiogeographicImage from 'images/filter/map_01@2x.png';
import RamsarImage from 'images/filter/map_02@2x.png';

import './styles.scss';

const ImagesPage = ({ currentImage }) => {

  const [isOpen, toggleModal] = useState(true);

  const ids = {
    Ramsar: RamsarImage,
    Biogeographic: BiogeographicImage,
  };

  return (

    <div className="l-images">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
        className="images-modal"
      >
        <div className="content">
          <img src={ids[currentImage]} alt={currentImage} />
        </div>
      </Modal>
    </div>
  );
}

ImagesPage.propTypes = {
  current: PropTypes.string.isRequired
};

export default ImagesPage;
