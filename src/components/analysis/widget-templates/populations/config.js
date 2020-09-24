
import React from 'react';
import WidgetTooltip from 'components/analysis/widget-tooltip';

// Utils
import { format } from 'd3-format';
const numberFormat = format(',.3r');


export const CONFIG = {
  parse: (data) => {
    const height = (data.length * 25) + 160;
    {
      return {
        chartData: data,
        chartConfig: {
          height,
          layout: 'vertical',
          margin: { top: 20, right: 0, left: 0, bottom: 20 },
          cartesianGrid: {
            vertical: true,
            horizontal: false,
            strokeDasharray: '5 20'
          },
          yKeys: {
            bars: {
              "total_populations": {
                barSize: 20,
                fill: '#BFD630'
              }
            }
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
            content: ({ payload }) =>
              <WidgetTooltip
                type="column"
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexDirection: 'column'
                }}
                settings={payload}
                />
          }
        },
      };
    }
  }
};


export default CONFIG;
