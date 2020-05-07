import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Chart from 'components/recharts';

import config from './config';
import './styles.scss';

const StackedBar = () => {
  // const { chartConfig, chartData } = config.parse();
  return (
    <Fragment>
      Stacked
      {/* <div className={`c-widget${title}`}> */}
        {/* <Chart
          data={[chartData]}
          config={chartConfig}
        /> */}
        {/* <div id={`widget-legend-${id}`} />
      </div> */}
    </Fragment>
  );
};

StackedBar.propTypes = {
  widgetData: PropTypes.array.isRequired,
  id: PropTypes.array.isRequired
};

export default StackedBar;
