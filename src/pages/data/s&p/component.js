import React from 'react';
import DangerousHTML from 'react-dangerous-html';

import { speciesPopulationInfo, speciesPopulationLocations } from './constants';

import './styles.scss';

const SpeciesPopulation = () =>
  <div className="l-species-population">
    <div className="content">
      {speciesPopulationInfo.map(info =>
      <>
        <h2>{info.title}</h2>
        <div>{info.description.map(description =><p><DangerousHTML html={description.p} /></p>)}</div>
      </>)}
    </div>
    <div className="locations">
      {speciesPopulationLocations.map(info => <h3>{info.location}<span>{info.countries}</span></h3>)}
    </div>
  </div>

export default SpeciesPopulation;
