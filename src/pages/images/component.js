import React from 'react';
import PropTypes from 'prop-types';

import BiogeographicImage from 'images/filter/map_01@2x.png';
import RamsarImage from 'images/filter/map_02@2x.png';

import './styles.scss';

const ImagesPage = ({ currentImage }) => {

  const ids = {
    Ramsar: RamsarImage,
    Biogeographic: BiogeographicImage,
  };

  return (
    <div className="l-images">
      <img src={ids[currentImage]} alt={currentImage} />
    </div>
  );
}

ImagesPage.propTypes = {
  currentImage: PropTypes.string.isRequired
};

export default ImagesPage;
