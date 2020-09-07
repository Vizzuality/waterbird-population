import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const ActiveFilters = ({ filters, onClick }) => {
  return (
    <section className="c-active-filters">
      {Object.entries(filters).map(filter =>
        filter && Object.values(filter[1]).length && filter[1].label
          ? <span onClick={() => onClick(filter[0], filter[1])}>{filter[1].label}</span>
          : filter[1].map(f => <span onClick={() => onClick(filter[0], f)}>{f.label}</span>)
      )}
    </section>
  )
};

ActiveFilters.propTypes = {
  populationFamilies: PropTypes.array.isRequired
}

export default ActiveFilters;
