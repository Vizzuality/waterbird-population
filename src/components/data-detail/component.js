import React from 'react';
import PropTypes from 'prop-types';

import ConservationFramework from './templates/conservation-framework';
import References from './templates/references';
import Notes from './templates/notes';

import './styles.scss';


const DataDetail = ({ info }) =>
    <div className="c-data-detail">
      <ConservationFramework />
      <References />
      <Notes />
    </div>

DataDetail.propTypes = {
  info: PropTypes.shape({}).isRequired
}

export default DataDetail;

