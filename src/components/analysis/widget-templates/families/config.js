
import React from 'react';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import WidgetLegend from 'components/analysis/widget-legend';
import WidgetTooltip from 'components/analysis/widget-tooltip';

// Utils
import { format } from 'd3-format';
const numberFormat = format(',.3r');


const getMetadata = (data) => data.map(d => d.name)

const getBars = data => data.reduce((acc, d) => {

  return {
    ...acc,
    [d.label]: {
      barSize: 20,
      stackId: 'bar',
      fill: d.color,
      stroke: d.color,
      isAnimationActive: false
    }
  };
}, {});

const dataBars = [
  {
    label: 'stable or fluctuating',
    color: '#BFD630',
  },
  {
    label: 'declining',
    color: '#5DBEE1',
  },
  {
    label: 'increasing',
    color: '#EB6240',
  },
  {
    label: 'unknown',
    color: '#0282B0',
  }
];

export const CONFIG = {
  parse: (data) => {
    const height = data.length * 30;
    {
      return {
        chartData: data,
        metadata: getMetadata(data),
        chartConfig: {
          height,
          minHeight: 200,
          layout: 'vertical',
          margin: { top: 20, right: 0, left: 0, bottom: 20 },
          cartesianGrid: {
            vertical: true,
            horizontal: false,
            strokeDasharray: '5 20'
          },
          xKey: 'name',
          yKeys: {
            bars: getBars(dataBars)
          },
          referenceLines: [{
            y: 0,
            stroke: 'black',
            strokeDasharray: 'solid',
            fill: 'black',
            opacity: '1',
            label: null
          }],
          xAxis: {
            type: 'number',
            domain: [0, 100],
            tick: {
              fontSize: 12,
              fill: 'rgba(0, 0, 0, 0.54)'
            },
            tickCount: 6
          },
          yAxis: {
            type: 'category',
            dataKey: 'name',
            tick: {
              fontSize: 10,
              fill: 'rgba(0,0,0,0.54)'
            },
            width: 200,
            label: ({ viewBox }) => {
              const { y, height } = viewBox;

              const cx = - height / 2;
              const cy = 20;
              const rot = `270 60 60`;
              return (
                <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle">
                  FAMILIES
                </text>
              );
            },
            unit: '%',

            // tickFormatter: value => Math.round(value),
            interval: 0,
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
              const groups = groupBy(payload, p => p.payload);
              return <WidgetLegend groups={groups} />;
            }
          },
          tooltip: {
            cursor: false,
            content: (
              <WidgetTooltip
                type="column"
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexDirection: 'column'
                }}
                settings={dataBars.map(bar => {
                  return {
                    label: bar.label, color: bar.color, key: bar.label, format: value => `${numberFormat(value)} %`
                  }
                })
                }
                title={{ key: 'name' }}
              />
            )
          }
        },
      };
    }
  }
};


export default CONFIG;
