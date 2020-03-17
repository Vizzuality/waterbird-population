import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import info from './constants';
import './styles.scss';

const ConservationFramework = () => (
  <div className="c-conservation-framework">
    <div className="header">
      <h2>{info.title}</h2>
    </div>
    <span>{info.title}</span>
    <ul>
      {info.data.map(data =>
        <li>{data}</li>)}
    </ul>
  </div>
)

ConservationFramework.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array
  }).isRequired
}

export default ConservationFramework;
