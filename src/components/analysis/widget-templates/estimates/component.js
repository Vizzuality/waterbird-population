import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'components/recharts';

import config from './config';

const Bars = ({ regionTrendsChart }) => {
  const { chartConfig, chartData, zeros } = config.parse(regionTrendsChart);

  return (
    <div>
      NUMBER OF WATERBIRD ESTIMATES UPDATED IN EACH RAMSAR REGION BY POPULATION:
      <div className="c-widget">
        {zeros.length ? (
          <Chart data={chartData} config={chartConfig} />
        ) : (
          <div className="widget-text">No data found matching filter criteria</div>
        )}
      </div>
    </div>
  );
};

Bars.propTypes = {
  regionTrendsChart: PropTypes.array.isRequired,
};

export default Bars;
