import React from 'react';
import TableCard from 'components/table-card';

import TabInfo from 'pages/static-tabs';

import SpeciesPopulationInfo from 'pages/data/constants/s&p';
import PopulationEstimatesInfo from 'pages/data/constants/pe';
import ThresholdInfo from 'pages/data/constants/threshold';
import PopulationTrendsInfo from 'pages/data/constants/trends';
import WAWInfo from 'pages/background/constants/waw';
import WIWPInfo from 'pages/background/constants/wiwp';
import WAFInfo from 'pages/background/constants/waf';
import glossaryInfo from 'pages/background/constants/glossary';


const PagesInfo = {
  BACKGROUND: {
    title: 'Background',
    tabs: [
      { name: 'What are Waterbirds?', id: 'WAW'},
      { name: 'What is waterbird population?', id: 'WIWP' },
      { name: 'What are flyways?', id: 'WAF' },
      { name: 'Glossary', id: 'Glossary'}
    ],
    tabsInfo: [
      {
        id: 'WAW',
        content: <TabInfo info={WAWInfo} />
      },
      {
        id: 'WIWP',
        content: <TabInfo info={WIWPInfo} />
      },
      {
        id: 'WAF',
        content: <TabInfo info={WAFInfo} />
      },
      {
        id: 'Glossary',
        content: <TabInfo info={glossaryInfo} />
      }
    ]
  },
  DATA: {
    title: 'Data presentation',
    tabs: [
      { name: 'Summary information', id: 'Summary' },
      { name: 'Species & Population', id: 'SP' },
      { name: 'Population Estimates', id: 'PE' },
      { name: 'Population Trends', id: 'PT'},
      { name: '1% threshold', id: 'Threshold'}
    ],
    tabsInfo: [
      {
        id: 'Summary',
        intro: '',
        content: <TableCard />
      },
      {
        id: 'SP',
        content: <TabInfo info={SpeciesPopulationInfo} />
      },
      {
        id: 'PE',
        content: <TabInfo info={PopulationEstimatesInfo} />
      },
      {
        id: 'PT',
        intro: '',
        content: <TabInfo info={PopulationTrendsInfo} />
      },
      {
        id: 'Threshold',
        intro: '',
        content: <TabInfo info={ThresholdInfo} />
      }
    ],
  },
  CREDITS: { title: 'Credits', description: null },
  FAQ: { title: 'FAQ', description: null }
}

export default PagesInfo;
