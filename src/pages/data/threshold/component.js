import React from 'react';

import estimatesInfo from './constants';

import './styles.scss';

const Threshold = () =>
  <div className="l-population-estimates">
    {estimatesInfo.map(info => (
      <div className="content">
        <h2>{info.title}</h2>
        {info.description}
      </div>
    ))}
  </div>

export default Threshold;
