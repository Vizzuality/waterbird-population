
import React from 'react';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import WidgetLegend from 'components/analysis/widget-legend';
import WidgetTooltip from 'components/analysis/widget-tooltip';

// Utils
import { format } from 'd3-format';
const numberFormat = format(',.3r');


const getMetadata = (data) => data.map(d => d.name)

const Bars = {
  'stable or fluctuating': {
    barSize: 20,
    stackId: 'bar',
    fill: '#BFD630',
    stroke: '#BFD630',
    isAnimationActive: false
  },
  'declining': {
    barSize: 20,
    stackId: 'bar',
    fill: '#EB6240',
    stroke: '#EB6240',
    isAnimationActive: false
  },
  'increasing': {
    barSize: 20,
    stackId: 'bar',
    fill: '#0282B0',
    stroke: '#0282B0',
    isAnimationActive: false
  },
  'unknown': {
    barSize: 20,
    stackId: 'bar',
    fill: '#BFD630',
    stroke: '#BFD630',
    isAnimationActive: false
  },
};

const getData = (data) => {
  if (!data) return null;
  return data.map(d => Object.values(d)[0].trend)
};

export const CONFIG = {

  parse: (data) => {
    {
      return {
        chartData: getData(data),
        metadata: getMetadata(data),
        chartConfig: {
          height: 500,
          margin: { top: 20, right: 0, left: 0, bottom: 20 },
          cartesianGrid: {
            vertical: true,
            horizontal: false,
            strokeDasharray: '5 20'
          },
          xKey: 'region',
          yKeys: {
            bars: Bars
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
            type: 'category',
            dataKey: 'region',
            domain: [0, 100],
            tick: {
              fontSize: 12,
              fill: 'rgba(0, 0, 0, 0.54)'
            },
            tickCount: 6
          },
          yAxis: {
            type: 'number',
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
          // legend: {
          //   align: 'left',
          //   verticalAlign: 'top',
          //   layout: 'horizontal',
          //   height: 80,
          //   top: 0,
          //   left: 0,
          //   position: 'relative',
          //   content: (properties) => {
          //     const { payload } = properties;
          //     const groups = groupBy(payload, p => p.payload);
          //     return <WidgetLegend groups={groups} />;
          //   }
          // },
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

                title={{ key: 'region' }}
              />
            )
          }
        },
      };
    }
  }
};


export default CONFIG;
