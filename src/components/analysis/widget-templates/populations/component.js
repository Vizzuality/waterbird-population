import React from 'react';
import PropTypes from 'prop-types';

import Chart from 'components/recharts';

import config from './config';

const StackedBar = (props) => {
  const {
    familyPopulations
  } = props;

  const { chartConfig, chartData } = config.parse(familyPopulations);

  return (
    <div>
      NUMBER OF WATERBIRD POPULATIONS IN EACH FAMILY:
      <div className="c-widget">
        {familyPopulations.length
          ?
          <Chart
            data={chartData}
            config={chartConfig}
          />

          : <div>No data found matching filter criteria</div>
        }
      </div>
    </div>
  );
};

StackedBar.propTypes = {
  widgetData: PropTypes.array.isRequired,
  id: PropTypes.array.isRequired
};

export default StackedBar;
