
import React from 'react';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import WidgetTooltip from 'components/analysis/widget-tooltip';

// Utils
import { format } from 'd3-format';
const numberFormat = format(',.3r');


const getMetadata = (data) => data.map(d => d.name)

const getBars = data => data.reduce((acc, d) => {

  return {
    ...acc,
    [d.name]: {
      barSize: 20,
      dataKey: "total_populations",
      fill: '#BFD630'
    }
  }
}, {});


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
          yKeys: {
            bars: getBars(data)
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
            domain: [0, 600],
            tick: {
              fontSize: 12,
              fill: 'rgba(0, 0, 0, 0.54)'
            },
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
            // tickFormatter: value => Math.round(value),
            interval: 0,
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
                payload
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
