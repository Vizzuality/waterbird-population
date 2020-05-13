import React from 'react';
import TableCard from 'components/table-card';

import TabInfo from 'pages/static-tabs';

import SpeciesPopulationInfo from 'pages/data/s&p/constants';
import PopulationEstimatesInfo from 'pages/data/pe/constants';
import ThresholdInfo from 'pages/data/threshold/constants';
import PopulationTrendsInfo from 'pages/data/trends/constants/';
import WAWInfo from 'pages/background/waw/constants';
import WIWPInfo from 'pages/background/wiwp/constants';
import WAFInfo from 'pages/background/waf/constants';
import glossaryInfo from 'pages/background/glossary/constants';
import FaqInfo from 'pages/faq/constants';

const PagesInfo = {
  BACKGROUND: {
    title: 'Background',
    tabs: [
      { name: 'What are Waterbirds?', id: 'WAW' },
      { name: 'What is waterbird population?', id: 'WIWP' },
      { name: 'What are flyways?', id: 'WAF' },
      { name: 'Glossary', id: 'Glossary' }
    ],
    info: [
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
      { name: 'Population Trends', id: 'PT' },
      { name: '1% threshold', id: 'Threshold' }
    ],
    info: [
      {
        id: 'Summary',
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
  FAQ: {
    title: 'Frequently Asked Questions',
    tabs: false,
    info:
    {
      id: 'faq',
      content: <TabInfo info={FaqInfo} />
    }
  }
}

export default PagesInfo;
