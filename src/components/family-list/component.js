import React from 'react';
import PropTypes from 'prop-types';

// components
import FamilyListItem from 'components/family-list-item';
import Spinner from 'components/spinner';

import './styles.scss';


const FamilyList = ({ populationFamilies }) => {
  if (!populationFamilies || !populationFamilies.length) return <Spinner />

  return populationFamilies.map(family => {
    return <FamilyListItem key={family.id} family={family} />
  });
};

FamilyList.propTypes = {
  populationFamilies: PropTypes.array.isRequired
}

export default FamilyList;
