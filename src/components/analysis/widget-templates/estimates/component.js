import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'components/recharts';

import config from './config';


const Bars = (props) => {
  const {
    regionTrendsChart
  } = props;

  const { chartConfig, chartData } = config.parse(regionTrendsChart);

  return (
    <div>
      NUMBER OF WATERBIRD ESTIMATES UPDATED IN EACH RAMSAR REGION:
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
