import React from 'react';
import groupBy from 'lodash/groupBy';
import WidgetLegend from 'components/analysis/widget-legend';
import WidgetTooltip from 'components/analysis/widget-tooltip';

// Utils
import { format } from 'd3-format';
const numberFormat = format(',.0f');
const percentageFormat = (value) => format('~')(format(',.1f')(value));

const getMetadata = (data) => data.map((d) => d.name);

const Bars = {
  'stable or fluctuating': {
    barSize: 55,
    stackId: 'bar',
    fill: '#BFD630',
    stroke: '#BFD630',
    isAnimationActive: false,
  },
  increasing: {
    barSize: 55,
    stackId: 'bar',
    fill: '#5DBEE1',
    stroke: '#5DBEE1',
    isAnimationActive: false,
  },
  declining: {
    barSize: 55,
    stackId: 'bar',
    fill: '#EB6240',
    stroke: '#EB6240',
    isAnimationActive: false,
  },
  unknown: {
    barSize: 55,
    stackId: 'bar',
    fill: '#0282B0',
    stroke: '#0282B0',
    isAnimationActive: false,
  },
};

const getData = (data) => {
  if (!data) return null;
  return data.map((d) => Object.values(d)[0].trend);
};

const getZeros = (data) => data.filter((d) => Object.values(d)[0].name.length);

export const CONFIG = {
  parse: (data) => {
    const zeros = getZeros(data);

    const YAxisLabel = ({ viewBox }) => {
      const { y } = viewBox;
      return (
        <text x={-250} y={y / 2} transform={`rotate(270)`} textAnchor="middle">
          NUMBER OF POPULATIONS
        </text>
      );
    };

    return {
      chartData: getData(data),
      metadata: getMetadata(data),
      zeros,
      chartConfig: {
        height: 500,
        margin: { top: 20, right: 0, left: 0, bottom: 20 },
        cartesianGrid: {
          vertical: true,
          horizontal: false,
          strokeDasharray: '5 20',
        },
        xKey: 'region',
        yKeys: {
          bars: Bars,
        },
        referenceLines: [
          {
            y: 0,
            stroke: 'black',
            strokeDasharray: 'solid',
            fill: 'black',
            opacity: '1',
            label: null,
          },
        ],
        xAxis: {
          type: 'category',
          dataKey: 'region',
          domain: [0, 100],
          tick: {
            fontSize: 12,
            fill: 'rgba(0, 0, 0, 0.54)',
          },
          tickCount: 6,
        },
        yAxis: {
          type: 'number',
          tick: {
            fontSize: 10,
            fill: 'rgba(0,0,0,0.54)',
          },
          label: YAxisLabel,
          tickFormatter: (value) => Math.round(value),
          interval: 0,
          width: 100,
        },
        legend: {
          align: 'left',
          verticalAlign: 'top',
          layout: 'horizontal',
          height: 80,
          top: 0,
          left: 0,
          position: 'relative',
          content: (properties) => {
            const { payload } = properties;
            const groups = groupBy(payload, (p) => p.payload);
            return <WidgetLegend groups={groups} />;
          },
        },
        tooltip: {
          cursor: false,
          content: ({ payload }) => {
            const region = payload.length && payload[0].payload && payload[0].payload.region;
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
                title={`Populations in ${region}`}
                settings={payload.map((bar) => {
                  const percentage =
                    bar.payload.total_populations === 0
                      ? ''
                      : `  (${percentageFormat(
                          (bar.value / bar.payload.total_populations) * 100
                        )}%)`;
                  return {
                    label: bar.dataKey,
                    color: bar.color,
                    key: bar.dataKey,
                    format: (value) => `Total: ${numberFormat(value)} ${percentage}`,
                  };
                })}
              />
            );
          },
        },
      },
    };
  },
};

export default CONFIG;
