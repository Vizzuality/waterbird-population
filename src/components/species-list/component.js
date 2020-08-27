import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import SpeciesListItem from 'components/species-list-item';

import './styles.scss';


const SpeciesList = ({ populationSpecies }) => {
  return populationSpecies.map(specie => {
    return <SpeciesListItem key={specie.id} specie={specie} />
  });
};

SpeciesList.propTypes = {
  populationSpecies: PropTypes.array.isRequired
}

export default SpeciesList;
