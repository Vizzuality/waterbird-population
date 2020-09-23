import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Chart from 'components/recharts';

import config from './config';
import './styles.scss';

const StackedBar = (props) => {
  const {
    familyPopulations
  } = props;

  const { chartConfig, chartData } = config.parse(familyPopulations);

  return (
    <div>
      NUMBER OF WATERBIRD POPULATIONS IN EACH FAMILY:
      <div className="c-populations-widget">
        <Chart
          data={chartData}
          config={chartConfig}
        />
      </div>
    </div>
  );
};

StackedBar.propTypes = {
  widgetData: PropTypes.array.isRequired,
  id: PropTypes.array.isRequired
};

export default StackedBar;
