/* eslint-disable react/prop-types */
import React from 'react';
import groupBy from 'lodash/groupBy';
import WidgetLegend from 'components/analysis/widget-legend';
import WidgetTooltip from 'components/analysis/widget-tooltip';

// Utils
import { format } from 'd3-format';
const numberFormat = format(',.0f');
const percentageFormat = (value) => format('~')(format(',.1f')(value));

const getBars = (data) =>
  data.reduce((acc, d) => {
    return {
      ...acc,
      [d.label]: {
        barSize: 20,
        stackId: 'bar',
        fill: d.color,
        stroke: d.color,
        isAnimationActive: false,
      },
    };
  }, {});

const dataBars = [
  {
    label: 'stable or fluctuating',
    color: '#BFD630',
  },
  {
    label: 'increasing',
    color: '#5DBEE1',
  },
  {
    label: 'declining',
    color: '#EB6240',
  },
  {
    label: 'unknown',
    color: '#0282B0',
  },
];

export const CONFIG = {
  parse: (data) => {
    const Label = ({ viewBox }) => {
      const { height } = viewBox;
      const cx = -height / 2;
      const cy = 10;
      const rot = `270 60 60`;
      return (
        <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle">
          FAMILIES
        </text>
      );
    };

    const CustomTick = (props) => {
      const { x, y, payload } = props;
      const { index, value } = payload;
      return (
        <g>
          <text
            x={x - 10}
            y={y}
            lineheight="19"
            className=""
            textAnchor="end"
            dominantBaseline="central"
          >
            <tspan fill="rgba(0,0,0,0.85)" fontSize="12">
              {value}
            </tspan>
            <tspan fill="rgba(0,0,0,0.85)" fontSize="12">
              {' '}
            </tspan>
            <tspan fill="rgba(0,0,0,0.85)" lineheight="29" fontStyle="italic" fontSize="12">
              ({data[index].scientific_name})
            </tspan>
          </text>
        </g>
      );
    };

    const LegendContent = (properties) => {
      const { payload } = properties;
      const groups = groupBy(payload, (p) => p.payload);
      return <WidgetLegend groups={groups} />;
    };

    const TooltipContent = ({ payload }) => {
      return (
        <WidgetTooltip
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
          }}
          payload={payload}
          title="Populations by trend"
          settings={payload.map((bar) => {
            return {
              label: bar.name,
              color: bar.color,
              key: bar.name,
              format: (value) =>
                `Total: ${numberFormat((bar.payload.total * value) / 100)} (${percentageFormat(
                  value
                )} %)`,
            };
          })}
        />
      );
    };

    const height = data.length * 25 + 160;
    return {
      chartData: data,
      chartConfig: {
        height,
        layout: 'vertical',
        margin: { top: 20, right: 0, left: 0, bottom: 20 },
        cartesianGrid: {
          vertical: true,
          horizontal: false,
          strokeDasharray: '5 20',
        },
        xKey: 'name',
        yKeys: {
          bars: getBars(dataBars),
        },
        referenceLines: [
          {
            x: 0,
            stroke: 'black',
            strokeDasharray: 'solid',
            fill: 'black',
            opacity: '1',
            label: null,
          },
        ],
        xAxis: {
          type: 'number',
          domain: [0, 100],
          tick: {
            fontSize: 12,
            fill: 'rgba(0, 0, 0, 0.54)',
          },
          tickCount: 6,
          unit: '%',
        },
        yAxis: {
          type: 'category',
          dataKey: 'name',
          tick: CustomTick,
          width: 200,
          interval: 0,
          label: Label,
        },
        legend: {
          align: 'left',
          verticalAlign: 'top',
          layout: 'horizontal',
          height: 80,
          top: 0,
          left: 0,
          position: 'relative',
          content: LegendContent,
        },
        tooltip: {
          cursor: false,
          content: TooltipContent,
        },
      },
    };
  },
};

export default CONFIG;
