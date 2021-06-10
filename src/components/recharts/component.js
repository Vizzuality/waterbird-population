import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import maxBy from 'lodash/maxBy';
import max from 'lodash/max';
import {
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Label,
} from 'recharts';

import ChartTick from './tick';

import './styles.scss';

class Chart extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    config: PropTypes.shape({}).isRequired,
    className: PropTypes.string,
    handleMouseMove: PropTypes.func,
    handleMouseLeave: PropTypes.func,
    onReady: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    handleMouseMove: null,
    handleMouseLeave: null,
    onReady: null,
  };

  componentDidMount() {
    const { onReady } = this.props;

    if (onReady) onReady(this.chart);
  }

  findMaxValue = (data, config) => {
    const { yKeys } = config;
    const maxValues = [];

    Object.keys(yKeys).forEach((key) => {
      Object.keys(yKeys[key]).forEach((subKey) => {
        if (data.some((d) => d.key)) {
          maxValues.push(maxBy(data, subKey)[subKey]);
        }
      });
    });

    return max(maxValues);
  };

  render() {
    const { data, config, handleMouseMove, handleMouseLeave } = this.props;

    const {
      margin = { top: 20, right: 0, left: 50, bottom: 0 },
      padding = { top: 0, right: 0, left: 0, bottom: 0 },
      height,
      width,
      viewBox,
      layout = 'horizontal',
      gradients,
      patterns,
      stackOffset,
      chartProps,
      ...content
    } = config;

    const {
      xKey,
      yKeys,
      xAxis,
      yAxis,
      cartesianGrid,
      cartesianAxis,
      tooltip,
      legend,
      unit,
      unitFormat,
    } = content;

    const { bars } = yKeys;
    const maxYValue = this.findMaxValue(data, config);

    return (
      <div
        ref={(r) => {
          this.chart = r;
        }}
        className="chart"
        style={{ height }}
      >
        <ResponsiveContainer width="100%" height={height}>
          <ComposedChart
            stackOffset={stackOffset}
            height={height}
            width={width}
            viewBox={viewBox}
            data={data}
            layout={layout}
            margin={margin}
            padding={padding}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...chartProps}
          >
            {cartesianGrid && <CartesianGrid {...cartesianGrid} />}

            {cartesianAxis && <CartesianAxis {...cartesianAxis} />}
            {xAxis && (
              <XAxis
                dataKey={xKey || ''}
                axisLine={false}
                tickLine={false}
                tickCount={8}
                tick={{
                  dy: 8,
                  fontStyle: 'bold',
                  fontSize: '12px',
                  fill: 'rgba(0,0,0,0.54)',
                  textShadow: '0 2 4 0 rgba(0,0,0,0.5)',
                }}
                {...xAxis}
              />
            )}
            {yAxis && (
              <YAxis
                axisLine={false}
                orientation={yAxis.orientation || 'left'}
                tickMargin={0}
                tickLine={false}
                tick={
                  <ChartTick
                    dataMax={maxYValue}
                    unit={unit || ''}
                    unitFormat={unitFormat || ((value) => value)}
                    fill="#AAA"
                  />
                }
                {...yAxis}
              />
            )}

            {bars &&
              Object.keys(bars).map((key) => (
                <Bar key={key} dataKey={key} dot={false} {...bars[key]}>
                  {!!bars[key].label && <Label {...bars[key].label} />}

                  {bars[key].itemColor &&
                    data.map((item) => <Cell key={`c_${item.color}`} fill={item.color} />)}
                </Bar>
              ))}

            {layout === 'vertical' && xAxis && (
              <XAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} {...xAxis} />
            )}

            {tooltip && (
              <Tooltip
                wrapperStyle={{
                  position: 'absolute',
                  top: 0,
                }}
                isAnimationActive={false}
                {...tooltip}
              />
            )}

            {legend && <Legend wrapperStyle={{ pointerEvents: 'none' }} {...legend} data={data} />}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart;
