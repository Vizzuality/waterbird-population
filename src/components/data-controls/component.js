import React from "react";
import PropTypes from "prop-types";
import Download from "components/download";
import ActiveFilters from 'components/filters/active-filters';

import { setFilters } from 'modules/population/actions';

import "./styles.scss";

const DataControls = ({ data, filters }) => {
  const handleClick = (type, value) => {
    const filtersUpdate = {
      ...filters,
      [type]: filters[type].filter(f => f !== value)
    }
    setFilters(filtersUpdate);
  }
  return (
    <div className="c-data-controls">
      <Download
        text={'Download results'}
        data={data}
        filename={'populations'}
        className="-dashed"
      />
      <ActiveFilters filters={filters} onClick={handleClick} heading={'Filtered by:'} />
    </div>
  );
};

DataControls.propTypes = {
  info: PropTypes.shape({})
};

export default DataControls;
