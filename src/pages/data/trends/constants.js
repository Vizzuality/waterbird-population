import React from 'react';

const trendsInfo = [
  {
    title: 'Population Trends.',
    description: (
      <ul>The following trend codes are used in the online application:
        <li>DEC: Declining</li>
        <li>INC: Increasing</li>
        <li>STA: Stable</li>
        <li>FLU: Fluctuating</li>
        <li>EXT: Extinct</li>
        <li>Unknown</li>
        <li>In cases where the trend is less certain a "?" may be appended, or 2 trend types separated by a "/" e.g. DEC/STA. However this has been avoided as much as possible.</li>    )
      </ul>
    )
  },
  {
    title: 'Start & End Year.',
    description: (
      <div>
        <p>All population trends require a start and end year that determines the period for which the trend applies. For the CSR reports, the trend period is shortened to a maximum of 10 years. In some arid and semi-arid regions (e.g. parts of Australia), where waterbird numbers are affected by cycles of draught and flood, longer periods were used to remove the impacts of short- or medium term fluctuations.</p>
      </div>
    )
  },
  {
    title: 'Trend Quality.',
    description: (
      <ul>From CSR5 and WPE5 onwards, four categories of trend qualities were used following the method developed by the International Wader Study Group:
        <li><span>No idea: </span>No monitoring at international scale in either breeding or non-breeding/wintering periods. Trends unknown. This category also includes populations where trends are statistically uncertain unless other evidence allows estimation of the trend.</li>
        <li><span>Poor: </span>Some international monitoring in either breeding or wintering periods although inadequate in quality or scope. Trends assumed through partial information.</li>
        <li><span>Reasonable: </span>International monitoring in either breeding or non-breeding/wintering periods that is adequate in quality or scope to track direction of population changes.</li>
        <li><span> Good: </span>International monitoring in either breeding or non-breeding/wintering periods that is adequate in quality or scope to track direction of population changes with defined statistical precision.</li>
      </ul>
    ),
  },
  {
    title: 'References for population trens.',
    description: (
      <div>
        <p>In cases where numerous sources have been used to calculate the trend, all sources are given, and explanation is provided in the Notes.</p>
      </div>
    )
  },
  {
    title: 'Notes.',
    description: (
      <div>
        <p>More information concerning the trend estimate are provided here as necessary.</p>
      </div>
    )
  },
];

export default trendsInfo;