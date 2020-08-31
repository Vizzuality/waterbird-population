import React from 'react';
import PropTypes from 'prop-types';

// components
import SpeciesListItem from 'components/species-list-item';
import Spinner from 'components/spinner';


import './styles.scss';


const SpeciesList = ({ populationSpecies }) => {

  if (!populationSpecies || !populationSpecies.length) return <Spinner />

  return populationSpecies.map((specie) => {
    return <SpeciesListItem key={specie.id} specie={specie} />
  })
};

SpeciesList.propTypes = {
  populationSpecies: PropTypes.array.isRequired
}

export default SpeciesList;
