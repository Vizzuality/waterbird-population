import React from 'react';
import PropTypes from 'prop-types';

import ConservationFramework from './templates/conservation-framework';
import PopulationSize from './templates/population-size';
import PopulationTrend from './templates/population-trend';
import PopulationPercent from './templates/population-percent';
import References from './templates/references';
import Notes from './templates/notes';

import './styles.scss';


const DataDetail = ({ info }) =>
    <div className="c-data-detail">
      <ConservationFramework />
      <PopulationSize />
      <PopulationTrend />
      <PopulationPercent />
      <References />
      <Notes />
    </div>

DataDetail.propTypes = {
  info: PropTypes.shape({}).isRequired
}

export default DataDetail;
