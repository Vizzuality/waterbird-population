import React from 'react';
import { createPortal } from 'react-dom';

// import Legend from 'components/widget/legend';
// import Tooltip from 'components/widget/tooltip';

const sortData = data => data.sort((a, b) => a.value - b.value).reverse();

const getData = data => data.reduce((acc, d) => {
  return {
    ...acc,
    label: d.label,
    value: d.value,
    [d.label]: d.value,
    name: d.unit
  };
}, {});


const getBars = data => data.reduce((acc, d, i) => {
  const colors = ['#2F939C', '#B2E600', '#E5007E', '#FFB191', '#00CBE3', '#00CD7A', '#AC005D', '#AC005D', '#CCCDCF'];
  return {
    ...acc,
    [d.label]: {
      stackId: 1,
      fill: colors[i],
      stroke: colors[i],
      isAnimationActive: false
    }
  };
}, {});


export const CONFIG = {
  parse: (data, id) => {
    const dataSorted = sortData(data);
    const chartData = getData(dataSorted);

    return {
      chartData,
      metadata: [1,2],
      chartConfig: {
        height: 70,
        cartesianGrid: {
          vertical: true,
          horizontal: false,
          strokeDasharray: '5 20',
          horizontalPoints: [0, 20, 3000, 40000]
        },
        layout: 'vertical',
        margin: { top: 0, right: 0, left: 0, bottom: 0 },
        xKey: 'name',
        yKeys: {
          bars: getBars(data),
          padding: 1
        },
        referenceLines: [{
          x: 20,
          stroke: 'red',
          strokeDasharray: 'solid',
          fill: 'red',
          opacity: '1',
          label: null
        }],
        xAxis: {
          type: 'number',
          tick: {
            fontSize: 12,
            fill: 'rgba(0,0,0,0.54)'
          }
        },
        yAxis: {
          type: 'category',
          tick: {
            fontSize: 12,
            fill: 'rgba(0,0,0,0.54)'
          },
          interval: 2
        },
        // legend: {
        //   position: 'relative',
        //   verticalAlign: 'bottom',
        //   layout: 'horizontal',
        //   height: 0,
        //   top: 0,
        //   content: (properties) => {
        //     const { payload } = properties;
        //     return createPortal(<Legend data={payload} />, document.querySelector(`#widget-legend-${id}`));
        //   }
        // },
        // tooltip: {
        //   cursor: false,
        //   content: (
        //     <Tooltip
        //       style={{
        //         flexDirection: 'column',
        //         marginTop: '10px',
        //         marginLeft: '-50px'
        //       }}
        //       settings={[
        //         { label: 'Area', key: 'label' },
        //         { label: 'Value', key: 'value', format: v => format('.2~s')(v) }
        //       ]}
        //     />
        //   )
        // }
      }
    };
  }
};

export default CONFIG;

