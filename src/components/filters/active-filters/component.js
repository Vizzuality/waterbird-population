import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';


const ActiveFilters = ({ filters, active, onClick, className, options = {} }) => {
  return (
    <section key={filters['publication_id']} className={classnames('c-active-filters', { [className]: className })}>

    {!!active.length && (
      <p>Filtered by:</p>
    )}

    {Object.keys(filters).map(k => {
      if (!filters[k]) return null;

      if (Array.isArray(filters[k])) {
        if (!filters[k].length) return null;

        return filters[k].map(f => {
          const label = options[k].find(o => o.value === f)?.label;

          if (!label) return null;

          return (
            <span
              className={classnames({ '-clickable': onClick })}
              onClick={() => onClick(k, f)}
            >
              {options[k].find(o => o.value === f)?.label}
            </span>
          )
        });
      }
      return (
        <p>
          <span
          className={classnames({ '-clickable': onClick && k !== 'publication_id' })}
          onClick={k !== 'publication_id' ? () => onClick(k, filters[k]): null}
        >
          Publication: {options[k].find(o => o.value === filters[k])?.label}
        </span>
        </p>
      );
    })}
  </section>
  )
};

ActiveFilters.propTypes = {
  filters: PropTypes.shape({}).isRequired,
  active: PropTypes.array,
  onClick: PropTypes.func.isRequired
};

ActiveFilters.defaultProps = {
  active: []
};

export default ActiveFilters;
