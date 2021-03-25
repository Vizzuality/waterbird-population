
import React from 'react';
import WidgetTooltip from 'components/analysis/widget-tooltip';

// Utils
import { format } from 'd3-format';
const numberFormat = format(',.0f');

export const CONFIG = {
  parse: (data) => {
    const height = (data.length * 25) + 160;
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
          tick: (props) => {
            const { x, y, payload } = props;
            const { index, value } = payload;
            return (
              <g>
                <text x={x - 10} y={y} lineheight="19" className="" textAnchor="end" dominantBaseline="central">
                  <tspan fill="rgba(0,0,0,0.85)" fontSize="12">{data[index].english_name}</tspan>
                  <tspan fill="rgba(0,0,0,0.85)" fontSize="12">{' '}</tspan>
                  <tspan fill="rgba(0,0,0,0.85)" lineheight="29" fontStyle="italic" fontSize="12">({value})</tspan>
                </text>
              </g>
            );
          },
          width: 200,
          label: ({ viewBox }) => {
            const { height } = viewBox;
            const cx = - height / 2 + 50;
            const cy = 20;
            const rot = `270 60 60`;
            return (
              <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle">
                FAMILIES
              </text>
            );
          },
          interval: 0,
        },
        tooltip: {
          cursor: false,
          content: ({ payload }) =>
            <WidgetTooltip
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column'
              }}
              type="column"
              payload={payload}
              title='Number of populations'
              settings={payload.map(bar => {
                return {
                  key: bar.dataKey, format: value => numberFormat(value)
                }
              })
              }
            />
        }
      },
    };
  }
};


export default CONFIG;
