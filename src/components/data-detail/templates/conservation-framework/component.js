import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ConservationFramework = ({ data }) => {
  return (
    <div className="c-conservation-framework">
      <div className="header">
        <h2>Conservation Framework</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Conservation Framework</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data.map(d =>
            <tr key={d.id}>
              <td><span className="cell-content">{d.conservation_framework}</span></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};

ConservationFramework.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export default ConservationFramework;
