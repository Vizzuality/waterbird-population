import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';


const ActiveFilters = ({ filters, active, onClick, className, options }) => {
  return (
    <section className={classnames('c-active-filters', { [className]: className })}>

    {!!active.length && <p>Filtered by:</p>}
    {Object.keys(filters).map(k => {
      return (
        <span
          className={classnames({ '-clickable': onClick })}
          onClick={() => onClick({ [k]: filters[k] })}
        >
          {/* {options && options[k].find(o => o.value === filters[k]).label} */}
          hola
        </span>
      )
    }
      // filter && Object.values(filter[1]).length && filter[1].label
      //   ? !filter[1].label.includes('default') && (<span
      //     className={classnames({ '-clickable': onClick })}
      //     onClick={() => onClick(filter[0], filter[1])}
      //   >{filter[1].label}</span>)
      //   : filter[1].map(f => <span className={classnames({ '-clickable': onClick })} onClick={() => onClick(filter[0], f)}>{f.label}</span>)
    )}
  </section>
  )
};

ActiveFilters.propTypes = {
  filters: PropTypes.array.isRequired,
  active: PropTypes.array,
  onClick: PropTypes.func.isRequired
};

ActiveFilters.defaultProps = {
  active: []
};

export default ActiveFilters;
