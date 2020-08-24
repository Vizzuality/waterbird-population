import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'components/button';
import Select from 'components/select';

import filters from './constants';
import { fetchFamilies } from 'services/families';
import './styles.scss';

const Filters = ({ activeFilters, onClick }) => {

  const [families, setFamilies] = useState([])

  useEffect(() => {
    fetchFamilies().then(data => setFamilies(data));
  }, [families]);

  const handleClick = () => {
    onClick(false);
  }

  return (
    <div className="c-filters">
      <h3>Filter options:</h3>
      <div className="filters-content">
        {filters.map(filter =>
          <div className="filters">
            <div className="filter-type">
              <label>{filter.label}</label>
              {filter.info ? filter.info : null}
            </div>
            <Select
              options={filter.options}
              classNamePrefix="react-select"
            />
          </div>
        )}
      </div>
      <div className="filters-buttons">
        <Button
          className="-background -tertiary -big"
          onClick={handleClick}
        >
          Cancel
        </Button>
        <Button
          className={classnames('-background -secondary -big', {
            '-disable': activeFilters && activeFilters.length <= 0
          })}>
            Apply filters
        </Button>
      </div>
    </div>
  )
}

Filters.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Filters;
