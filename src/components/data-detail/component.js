import React from 'react';

import PopulationInfo from './templates/population-info';
import ConservationFramework from './templates/conservation-framework';
import PopulationSize from './templates/population-size';
import PopulationTrend from './templates/population-trend';
import PopulationPercent from './templates/population-percent';
import References from './templates/references';
import Notes from './templates/notes';

import './styles.scss';


const DataDetail = (props) =>  {
  const {
    populationInfoData,
    populationConservationFramework,
    populationSizeData,
    populationTrendData,
    populationPercentData,
    populationReferences,
    populationNotes,
    user,
    publication
  } = props;
  return (
    <div className="c-data-detail">
      <PopulationInfo data={populationInfoData} />
      <ConservationFramework data={populationConservationFramework} />
      <PopulationSize data={populationSizeData} user={user} publication={publication} />
      <PopulationTrend data={populationTrendData} user={user} publication={publication} />
      <PopulationPercent data={populationPercentData} user={user} publication={publication} />
      <References data={populationReferences} />
      <Notes data={populationNotes} />
    </div>
  );
}


export default DataDetail;
