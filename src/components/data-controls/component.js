import React from "react";
import PropTypes from "prop-types";
import Download from "components/download";
import ClearFilters from 'components/filters/clear-filters';
import ActiveFilters from 'components/filters/active-filters';

import "./styles.scss";

const DataControls = ({ data, filters, setFilters, resetFilters, activeFilters, publications }) => {
  const handleClick = (type, value) => {
    const filtersUpdate = {
      ...filters,
      [type]: type === 'publication_id'
        ? { label: `${publications[0].description + '(default)'}`, value: publications[0].id }
        : filters[type].filter(f => f !== value)
    }
    setFilters(filtersUpdate);
  };

  const handleFilters = () => {
    resetFilters();
  };

  return (
    <div className="c-data-controls">
      <Download
        text={'Download results'}
        data={data}
        filename={'populations'}
        className="-dashed"
      />
      <div className="filters-controls">
        <ActiveFilters
          filters={filters}
          onClick={handleClick}
          heading={'Filtered by:'}
          active={activeFilters}
        />
        <ClearFilters
          handleFilters={handleFilters}
          activeFilters={activeFilters}
          unsetteledFilters={false}
        />
      </div>
    </div>
  );
};

DataControls.propTypes = {
  info: PropTypes.shape({})
};

export default DataControls;
