import React from 'react';
import PropTypes from 'prop-types';

import initialState from 'modules/population/initial-state';

import './styles.scss';

const ClearFilters = ({
  activeFilters,
  unsetteledFilters,
  resetFilters,
  handleUnsetteledFilters
}) => {

  if ((!activeFilters.length && unsetteledFilters && !unsetteledFilters.length)
    || (!activeFilters.length && !unsetteledFilters)) return null;

  const handleFilters = () => {
    handleUnsetteledFilters && handleUnsetteledFilters(initialState.filters);
    resetFilters();
  };

  return <button className="c-clear-filters" onClick={handleFilters}>Clear filters</button>
};

ClearFilters.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  unsetteledFilters: PropTypes.array.isRequired,
  resetFilters: PropTypes.func.isRequired,
  handleUnsetteledFilters: PropTypes.func
};

ClearFilters.defaultProps = {
  handleUnsetteledFilters: null
};

export default ClearFilters;
