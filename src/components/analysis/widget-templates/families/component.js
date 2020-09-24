import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'components/recharts';

import config from './config';


const Bars = (props) => {
  const {
    familyTrendsChart
  } = props;

  const { chartConfig, chartData } = config.parse(familyTrendsChart);

  return (
    <div>
      POPULATION TRENDS BY SELECTED WATERBIRD FAMILIES:
      <div className="c-population-trends-widget">
        <Chart
          data={chartData}
          config={chartConfig}
        />
      </div>
    </div>
  );
};

Bars.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.array.isRequired
};

export default Bars;
