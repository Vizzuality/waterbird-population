export const activeLayers = [

  // GEOJSON DATA LAYER
  {
    id: 'populations-by-specie',
    type: 'geojson',
    source: {
      type: 'geojson',
      data: `${process.env.REACT_APP_CARTO_BASE_URL}sql?q=SELECT * from species_and_flywaygroups where wpesppid = {{specieid}}&api_key=2fbf264d4431656a7d979682d59b6f5c79c9e3b4&format=geojson`
    },
    paramsConfig: [
      { key: 'specieid', required: true }
    ],
    render: {
      layers: [
        {
          type: "fill",
          //  "source-layer": "layer0",
          paint: {
            'fill-color': '#FFBB00',
            'fill-opacity': 0.5
          }
        },
        {
          type: "line",
          //  "source-layer": "layer0",
          paint: {
            "line-color": "#000000",
            "line-opacity": 0.5,
            "line-dasharray": [1, 2]
          }
        }
      ]
    }
  },
];
