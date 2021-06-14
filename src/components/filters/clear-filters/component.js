import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
  lonLat,
  page,
}) => {
  if (
    (!lonLat &&
      search === '' &&
      !activeFilters.length &&
      unsetteledFilters &&
      !unsetteledFilters.length) ||
    (!lonLat &&
      search === '' &&
      !activeFilters.length &&
      !activeFilters.length &&
      !unsetteledFilters)
  )
    return null;

  const handleFilters = () => {
    handleUnsetteledFilters && handleUnsetteledFilters(initialState.filters);
    resetFilters();
    resetPopulationsByLocation();
    resetLocation(); // Remove lonLat to update map and Location Pop up
    resetSearch(); // Remove input search
  };

  return (
    <button
      key={activeFilters}
      aria-label="clear-filters"
      className={cx('c-clear-filters', { '-widgets': page === 'ANALYZE' })}
      onClick={handleFilters}
    >
      Clear filters and search criteria
    </button>
  );
};

ClearFilters.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  unsetteledFilters: PropTypes.array.isRequired,
  resetFilters: PropTypes.func.isRequired,
  handleUnsetteledFilters: PropTypes.func,
  resetPopulationsByLocation: PropTypes.func.isRequired,
  resetLocation: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
  search: PropTypes.string,
  lonLat: PropTypes.array,
  page: PropTypes.string,
};

ClearFilters.defaultProps = {
  handleUnsetteledFilters: null,
  search: '',
  lonLat: null,
  page: null,
};

export default ClearFilters;
