import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const Notes = ({ data }) => {

  if (!data.length) return null;
  return <div className="c-references">
    <div className="header">
      <h2>Notes</h2>
    </div>
    <ul>
      {data.map(({ id, info, type }) =>
        <li key={id}>
          N{type}{id} - {info}
        </li>)}
    </ul>
  </div>
};

Notes.propTypes = {
  data: PropTypes.array.isRequired
}

export default Notes;
