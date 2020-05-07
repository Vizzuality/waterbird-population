const fakeData = [
  {
    'updated': 150,
    'not updated': 650,
    region: 'Africa',
  },
  {
    'updated': 210,
    'not updated': 670,
    region: 'Asia',
  },
  {
    'updated': 260,
    'not updated': 340,
    region: 'Europe',
  },
  {
    'updated': 220,
    'not updated': 570,
    region: 'Neotropics',
  },
  {
    'updated': 210,
    'not updated': 350,
    region: 'Noth America',
  },
  {
    'updated': 205,
    'not updated': 370,
    region: 'Oceania',
  },
];

const getMetadata = (data) => data.map(d => d.region)

const getBars = data => data.reduce((acc, d) => {
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
    label: 'updated',
    color: '#BFD630',
  },
  {
    label: 'not updated',
    color: '#0282B0',
  },
];

export const CONFIG = {
  parse: (data) => {
    {
      return {
        chartData: fakeData,
        metadata: getMetadata(fakeData),
        chartConfig: {
          height: 360,
          cartesianGrid: {
            horizontal: true,
            strokeDasharray: "5 20",
            vertical: false,
          },
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
            domain: [0, 100],
            tick: {
              fontSize: 12,
              fill: 'rgba(0, 0, 0, 0.54)'
            },
            ticks: getMetadata(fakeData),
            interval: 0
          },
          yAxis: {
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
            type: 'number'
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
