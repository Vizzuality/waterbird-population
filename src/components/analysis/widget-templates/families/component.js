import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'components/recharts';

import config from './config';

const Bars = ({ familyTrendsChart }) => {
  const { chartConfig, chartData } = config.parse(familyTrendsChart);

  return (
    <div>
      POPULATION TRENDS BY SELECTED WATERBIRD FAMILIES:
      <div className="c-widget">
        {familyTrendsChart.length ? (
          <Chart data={chartData} config={chartConfig} />
        ) : (
          <div>No data found matching filter criteria</div>
        )}
      </div>
    </div>
  );
};

Bars.propTypes = {
  familyTrendsChart: PropTypes.array.isRequired,
};

export default Bars;
