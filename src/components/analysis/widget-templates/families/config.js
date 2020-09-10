const fakeData = [
  {
    'fluctuating': 15,
    'decreasing': 65,
    'stable': 65,
    'increasing': 65,
    region: 'Africa',
  },
  {
    'fluctuating': 67,
    'decreasing': 65,
    'stable': 21,
    'increasing': 65,
    region: 'Asia',
  },
  {
    'fluctuating': 39,
    'decreasing': 65,
    'stable': 12,
    'increasing': 15,
    region: 'Europe',
  },
  {
    'fluctuating': 220,
    'decreasing': 570,
    'stable': 210,
    'increasing': 350,
    region: 'Neotropics',
  }
];

const getMetadata = (data) => data.map(d => d.region)

const getData = (data) => {

  // gain: data.map(d => d.gain_m2 / 1000000).reduce((previous, current) => current + previous, 0),
  // loss: -data.map(d => d.loss_m2 / 1000000).reduce((previous, current) => current + previous, 0),
  // net_change: data.map(d => d.net_change_m2 / 1000000)
  //   .reduce((previous, current) => current + previous, 0)
}
const getBars = data => data.reduce((acc, d) => {

  // console.log(d, {
  //   ...acc,
  //   [d.label]: {
  //     stackId: 'bar',
  //     fill: d.color,
  //     stroke: d.color,
  //     isAnimationActive: false
  // }})

  return {
    ...acc,
    [d.label]: {
      stackId: 'bar',
      fill: d.color,
      stroke: d.color,
      isAnimationActive: false
    }
  };
}, {});


const dataBars = [
  {
    label: 'fluctuating',
    color: '#BFD630',
    //$color-1 fluctuating
  },
  {
    label: 'decreasing',
    color: '#5DBEE1',
    //decreasing
  },
  {
    label: 'stable',
    color: '#0282B0',
    //$color-2 fluctuating
  },
  {
    label: 'increasing',
    color: '#EB6240',
    //increasing
  },
];

export const CONFIG = {
  parse: (data) => {
    const chartData = fakeData;
    {
      return {
        chartData,
        metadata: getMetadata(fakeData),
        chartConfig: {
          height: 360,
          layout: 'vertical',
          margin: { top: 20, right: 0, left: 0, bottom: 20 },
          xKey: 'region',
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
            domain: [0, 400],
            tick: {
              fontSize: 12,
              fill: 'rgba(0, 0, 0, 0.54)'
            },
            ticks: getMetadata(fakeData),
            interval: 0
          },
          yAxis: {
            type: "category",
            tick: {
              fontSize: 12,
              fill: 'rgba(0,0,0,0.54)'
            },
            width: 40,
            tickFormatter: value => Math.round(value),
            domain: [0, 100],
            interval: 0,
            orientation: 'right',
            label: {
              value: '%',
              position: 'top',
              offset: 25
            },
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
          //     return <WidgetLegend type="height" groups={groups} />;
          //   }
          // },
          // tooltip: {
          //   cursor: false,
          //   content: (
          //     <WidgetTooltip
          //       type="column"
          //       style={{
          //         display: 'flex',
          //         justifyContent: 'space-around',
          //         flexDirection: 'column'
          //       }}
          //       settings={getSettingsTooltip(bars)}
          //       label={{ key: 'name' }}
          //     />
          //   )
          // }
        },
      };
    }
  }
};


export default CONFIG;
