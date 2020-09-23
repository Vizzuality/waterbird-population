import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const ClearFilters = ({
  activeFilters, filtersInitialState, unsetteledFilters, resetFilters, handlePendingFilters }) => {
    activeFilters.length, handlePendingFilters, !unsetteledFilters.length)
  if (!activeFilters.length && unsetteledFilters && !unsetteledFilters.length) return null;

  const handleFilters = () => {

      handlePendingFilters(filtersInitialState);

    resetFilters();
  };

  return <button className="c-clear-filters" onClick={handleFilters}>Clear filters</button>
};

ClearFilters.propTypes = {
  resetFilters: PropTypes.func.isRequired,
  activeFilters: PropTypes.array.isRequired
}

export default ClearFilters;
