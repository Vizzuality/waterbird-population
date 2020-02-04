export const activeLayers = [

  // GEOJSON DATA LAYER
  {
    id: 'multipolygon',

    type: 'geojson',
    source: {
      type: 'geojson',
      data: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    0.703125,
                    54.77534585936447
                  ],
                  [
                    0.3515625,
                    18.646245142670608
                  ],
                  [
                    35.5078125,
                    44.59046718130883
                  ],
                  [
                    0.703125,
                    54.77534585936447
                  ]
                ]
              ]
            }
          }
        ]
      }
    },
    render: {
      layers: [
        {
          type: "fill",
          //  "source-layer": "layer0",
          paint: {
            'fill-color': '#FFBB00',
            'fill-opacity': 1
          }
        },
        {
          type: "line",
          //  "source-layer": "layer0",
          paint: {
            "line-color": "#000000",
            "line-opacity": 0.1
          }
        }
      ]
    }
  },
];
