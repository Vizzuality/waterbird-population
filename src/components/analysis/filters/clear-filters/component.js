import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const ClearFilters = ({
  activeFilters, resetFilters }) => {
  if (!activeFilters.length) return null;

  const handleFilters = () => {
    resetFilters();
  };

  return <button className="c-clear-filters-analysis" onClick={handleFilters}>Clear filters</button>
};

ClearFilters.propTypes = {
  resetFilters: PropTypes.func.isRequired,
  activeFilters: PropTypes.array.isRequired
}

export default ClearFilters;
