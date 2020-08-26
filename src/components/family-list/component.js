import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import FamilyListItem from 'components/family-list-item';
import Spinner from 'components/spinner';

import './styles.scss';


const FamilyList = ({ populationFamilies }) => {
  console.log(populationFamilies)
  if (!populationFamilies || !populationFamilies.length) return <Spinner />

  return populationFamilies.map(family => {
    return <FamilyListItem key={family.id} family={family} />
  });
};

FamilyList.propTypes = {
  populationFamilies: PropTypes.array.isRequired
}

export default FamilyList;
