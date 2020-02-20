const trendsInfo = [
  {
    title: 'Population Trends.',
    description: [
      { p: 'The following trend codes are used in the online application:' }
    ],
    list: [
      { item: 'DEC: Declining' },
      { item: 'INC: Increasing' },
      { item: 'STA: Stable' },
      { item: 'FLU: Fluctuating' },
      { item: 'EXT: Extinct' },
      { item: 'Unknown' },
      { item: 'In cases where the trend is less certain a "?" may be appended, or 2 trend types separated by a "/" e.g. DEC/STA. However this has been avoided as much as possible.' }
    ]
  },
  {
    title: 'Start & End Year.',
    description: [
      { p: 'All population trends require a start and end year that determines the period for which the trend applies. For the CSR reports, the trend period is shortened to a maximum of 10 years. In some arid and semi-arid regions (e.g. parts of Australia), where waterbird numbers are affected by cycles of draught and flood, longer periods were used to remove the impacts of short- or medium term fluctuations.' },
    ]
  },
  {
    title: 'Trend Quality.',
    description: [
      { p: 'From CSR5 and WPE5 onwards, four categories of trend qualities were used following the method developed by the International Wader Study Group:' }
    ],
    list: [
      { itemNumbered: '<span>No idea: </span>No monitoring at international scale in either breeding or non-breeding/wintering periods. Trends unknown. This category also includes populations where trends are statistically uncertain unless other evidence allows estimation of the trend.' },
      { itemNumbered: '<span>Poor: </span>Some international monitoring in either breeding or wintering periods although inadequate in quality or scope. Trends assumed through partial information.' },
      { itemNumbered: '<span>Reasonable: </span>International monitoring in either breeding or non-breeding/wintering periods that is adequate in quality or scope to track direction of population changes.' },
      { itemNumbered: '<span> Good: </span>International monitoring in either breeding or non-breeding/wintering periods that is adequate in quality or scope to track direction of population changes with defined statistical precision.' }
     ]
  },
  {
    title: 'References for population trens.',
    description: [
      { p: 'In cases where numerous sources have been used to calculate the trend, all sources are given, and explanation is provided in the Notes.' }
    ]
  },
  {
    title: 'Notes.',
    description: [
      { p: 'More information concerning the trend estimate are provided here as necessary.' },
    ]
  },
];

export default trendsInfo;
