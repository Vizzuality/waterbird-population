import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const References = ({ data }) => {
  if (!data.length) return null;

  return (
    <div className="c-references">
      <div className="header">
        <h2>References</h2>
      </div>
      <ul>
        {data.map(({ id, body }) => (
          <li id={id} key={id}>
            R{id} - {body}
          </li>
        ))}
      </ul>
    </div>
  );
};

References.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default References;
