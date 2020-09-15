
import React from 'react';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import WidgetLegend from 'components/analysis/widget-legend';
import WidgetTooltip from 'components/analysis/widget-tooltip';

const getMetadata = (data) => data.map(d => d.name)

const getData = (data) => {

  return data.map(d => {

    return {
      name: d.name,
      increasing: d.percentage.find(s => s.increasing) ? d.percentage.find(s => s.increasing).increasing : 0,
      unclear: d.percentage.find(s => s.unclear) ? d.percentage.find(s => s.unclear).unclear : 0,
      unknown: d.percentage.find(s => s.unknown) ? d.percentage.find(s => s.unknown).unknown : 0,
      declining: d.percentage.find(s => s.declining) ? d.percentage.find(s => s.declining).declining : 0,
      'stable or fluctuating': d.percentage.find(s => s['stable or fluctuating']) ? d.percentage.find(s => s['stable or fluctuating'])['stable or fluctuating'] : 0,
    }
  })
}
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
    //$color-1 fluctuating
  },
  {
    label: 'declining',
    color: '#5DBEE1',
    //decreasing
  },
  {
    label: 'increasing',
    color: '#EB6240',
    //increasing
  },
  {
    label: 'unclear',
    color: '#0282B0',
    //$color-2 fluctuating
  },
  {
    label: 'unknown',
    color: '#0282B0',
    //increasing
  },
];

export const CONFIG = {
  parse: (data) => {

    const chartData = getData(data);
    const height = chartData.length * 30;

    {
      return {
        chartData,
        metadata: getMetadata(data),
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
           // ticks: getMetadata(fakeData),
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
                //settings={getSettingsTooltip(bars)}
                label={{ key: 'name' }}
              />
            )
          }
        },
      };
    }
  }
};


export default CONFIG;
