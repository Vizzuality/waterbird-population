import React from 'react';

import trendsInfo from './constants';

import './styles.scss';

const PopulationTrends = () =>
  <div className="l-population-trends">
    {trendsInfo.map(info => (
      <div className="content">
        <h2>{info.title}</h2>
        {info.description}
      </div>
    ))}
  </div>

export default PopulationTrends;
