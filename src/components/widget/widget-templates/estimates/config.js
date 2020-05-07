const fakeData = [
  {
    name: 'Ducks, Geese and Swans (Anatilidae)',
    value: 120
  },
  {
    name: 'Plovers (Charadriidae)',
    value: 20
  },
  {
    name: 'Sandpipers and allies (Scolopacidae)',
    value: 290
  },
  {
    name: 'Herons and Egrets (Ardeidae)',
    value: 310
  },
  {
    name: 'Gulls, Tems and Skimmers (Laridae)',
    value: 240
  },
  {
    name: 'Rails, Crakes and allies (Rallidae)',
    value: 78
  },
  {
    name: 'Crab Plover (Dromadidae),',
    value: 58
  },
  {
    name: 'Cormorants (Phalacrocoracidae)',
    value: 345
  },
  {
    name: 'Grebes (Podicipedidae)',
    value: 412
  },
  {
    name: 'Ibises and Spoonbills (Threskionithidae)',
    value: 196
  },
  {
    name: 'Cranes (Gruidae)',
    value: 235
  },
  {
    name: 'Coursers and Pratincoles (Glareolidae)',
    value: 381
  },
  {
    name: 'Storks (Ciconiidae)',
    value: 219
  },
  {
    name: 'Stilts and Acovets (Recurvirostridae)',
    value: 29
  },
  {
    name: 'Thick-knees (Burhinanidae)',
    value: 96
  },
  {
    name: 'Oystercatchers (Haematopodidae)',
    value: 376
  },
  {
    name: 'Pelicans (Pelecanidae)',
    value: 432
  },
  {
    name: 'Flamingos (Phoenicopteridae)',
    value: 216
  },
  {
    name: 'Jacanas (Jacanidae)',
    value: 259
  },
  {
    name: 'Loons or Divers (Gaviidae)',
    value: 321
  },
  {
    name: 'Seedsnipes (Thinocoridae)',
    value: 228
  },
  {
    name: 'Darters (Anhingidae)',
    value: 123
  },
  {
    name: 'Painted-snipes (Rostratulidae)',
    value: 388
  },
  {
    name: 'Finfoots (Heliornithidae)',
    value: 242
  },
  {
    name: 'Limpkin (Aramidae)',
    value: 297
  },
  {
    name: 'Ibisbill (Ibidorhynchidae)',
    value: 201
  },
  {
    name: 'Plains Wanderer (Anseranatidae)',
    value: 347
  },
  {
    name: 'Shoebill (Balaenicipitidae)',
    value: 359
  },
  {
    name: 'Hammerkop (Scopidae)',
    value: 333
  },
  {
    name: 'Screamers (Anhimidae)',
    value: 217
  },
  {
    name: 'Sunbittern (Eurypydae)',
    value: 174
  },
]


const getMetadata = (data) => data.map(d => d.name)

const getBars = data => data.reduce((acc,d) => {
  return [...acc, {
      value: d.value,
      fill: '#BFD630',
      stroke: '#BFD630',
      isAnimationActive: false
  }];
},[]);


export const CONFIG = {
  parse: (data) => {
    {
      return {
        chartData: fakeData,
        metadata: getMetadata(fakeData),
        chartConfig: {
          layout: 'vertical',
          height: 360,
          cartesianGrid: {
            horizontal: false,
            strokeDasharray: "5 20",
            vertical: true,
          },
          margin: { top: 20, right: 0, left: 0, bottom: 20 },
          xKey: 'value',
          yKeys: {
            bars: {
              value: {
                barSize: 'value',
                fill: '#BFD630',
                stroke: '#BFD630',
                isAnimationActive: false
              }
            },
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
            domain: [1, 450],
            tick: {
              fontSize: 12,
              fill: 'rgba(0, 0, 0, 0.54)'
            },
           // ticks: getMetadata(fakeData),
            interval: 0
          },
          yAxis: {
            ticks: getMetadata(fakeData),
            tick: {
              fontSize: 12,
              fill: 'rgba(0,0,0,0.54)'
            },
            width: 40,
            // ticks: getDomain(date),
            interval: 0,
            orientation: 'left',
            // label: {
            //   value: 'name',
            //   position: 'top',
            //   offset: 25
            // },
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
