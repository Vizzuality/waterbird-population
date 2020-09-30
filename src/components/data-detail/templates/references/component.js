import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const References = ({ data }) => {

  if (!data.length) return null;

  return <div className="c-references">
    <div className="header">
      <h2>References</h2>
    </div>
    <ul>
      {data.map(({ id, info, type }) =>
        <li key={id}>
          R{type}{id} - {info}
        </li>)}
    </ul>
  </div>
};

References.propTypes = {
  data: PropTypes.array.isRequired
}
export default References;
