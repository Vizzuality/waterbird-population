import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ConservationFramework = ({ data }) => {
  return (
    <div className="c-conservation-framework">
      <div className="header">
        <h2>Conservation frameworks</h2>
      </div>
      <ul>
        {data.map((d, i) => (
          <li key={d.id}>
            <span>{d.conservation_framework || '-'}</span>
            {i < data.length - 1 ? ',' : ''}
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
