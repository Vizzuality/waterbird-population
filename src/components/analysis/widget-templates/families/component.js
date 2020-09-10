import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'components/recharts';
// import sortBy from 'lodash/sortBy';

import config from './config';


const Bars = (props) => {
  const { chartConfig, chartData } = config.parse();
  const {
    familyTrends
  } = props;
console.log(familyTrends, 'data widget')
  return (
    <div>
      POPULATION TRENDS BY SELECTED WATERBIRD FAMILIES:
      <div className="c-population-trends-widget">
        <Chart
          data={chartData}
          config={chartConfig}
        />
        {/* <div id={`widget-legend-${id}`} />*/}
      </div>
    </div>
  );
};

Bars.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.array.isRequired
};

export default Bars;
