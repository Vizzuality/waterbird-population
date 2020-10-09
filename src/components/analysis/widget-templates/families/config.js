
import React from 'react';
import groupBy from 'lodash/groupBy';
import WidgetLegend from 'components/analysis/widget-legend';
import WidgetTooltip from 'components/analysis/widget-tooltip';

// Utils
import { format } from 'd3-format';
const numberFormat = format(',.0f');
const percentageFormat = format(',.2f');

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
  }
];

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
        xKey: 'name',
        yKeys: {
          bars: getBars(dataBars)
        },
        referenceLines: [{
          x: 0,
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
          tickCount: 6,
          unit: '%',
          label: ({ viewBox }) => {
            const { y } = viewBox;
            const cx = - y / 2 + 50;
            const cy = 20;
            const rot = `270 60 60`;
            return (
              <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle">
                FAMILIES
                </text>
            );
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
          // label: ({ viewBox }) => {
          //   const { y, height } = viewBox;

          //   const cx = - height +20;
          //   const cy = 20;
          //   const rot = `270 60 60`;
          //   return (
          //     <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle">
          //       NUMBER OF POPULATIONS
          //     </text>
          //   );
          // },
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
          content: ({ payload }) => {
            return (
              <WidgetTooltip
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexDirection: 'column',
                  alignItems: 'center',
                  alignContent: 'center'
                }}
                payload={payload}
                title='Populations by trend'
                settings={payload.map(bar => {
                  return {
                    label: bar.name, color: bar.color, key: bar.name, format: value => `Total: ${numberFormat(bar.payload.total * value / 100)} (${percentageFormat(value)} %)`
                  }
                })}
              />
            )
          }
        }
      },
    };
  }
};


export default CONFIG;
