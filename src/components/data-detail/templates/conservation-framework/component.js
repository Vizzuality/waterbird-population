import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ConservationFramework = ({ data }) => {
  return (
    <div className="c-conservation-framework">
      <div className="header">
        <h2>Conservation Framework</h2>
      </div>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <span className="cell-content">{d.conservation_framework || '-'}</span>
            {d < data.length ? ',' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

ConservationFramework.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ConservationFramework;
