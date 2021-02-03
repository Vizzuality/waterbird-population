import React from 'react';
import PropTypes from 'prop-types';

import initialState from 'modules/explore/initial-state';

import './styles.scss';

const ClearFilters = ({
  activeFilters,
  unsetteledFilters,
  resetFilters,
  handleUnsetteledFilters,
  resetPopulationsByLocation,
  resetLocation,
  resetSearch,
  search,
  lonLat
}) => {

  if ((!lonLat && search === '' && !activeFilters.length && unsetteledFilters && !unsetteledFilters.length)
    || (!lonLat && search === '' && !activeFilters.length && !activeFilters.length && !unsetteledFilters)) return null;

  const handleFilters = () => {
    handleUnsetteledFilters && handleUnsetteledFilters(initialState.filters);
    resetFilters();
    resetPopulationsByLocation();
    resetLocation(); // Remove lonLat to update map and Location Pop up
    resetSearch(); // Remove input search
  };

  return (
    <button
      aria-label="clear-filters"
      className="c-clear-filters"
      onClick={handleFilters}
    >
      Clear filters and search criteria
    </button>
  )
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
