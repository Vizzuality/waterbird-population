import React from 'react';

import TabInfo from 'pages/static-tabs';

import WidgetsWrapper from "components/widget";
import SpeciesPopulationInfo from 'pages/data/s&p/constants';
import PopulationEstimatesInfo from 'pages/data/pe/constants';
import ThresholdInfo from 'pages/data/threshold/constants';
import PopulationTrendsInfo from 'pages/data/trends/constants/';
import WAWInfo from 'pages/background/waw/constants';
import WIWPInfo from 'pages/background/wiwp/constants';
import WAFInfo from 'pages/background/waf/constants';
import glossaryInfo from 'pages/background/glossary/constants';
import FSInfo from 'pages/credits/fs.js';
import ECInfo from 'pages/credits/ec.js';
import FaqInfo from 'pages/faq/constants';

const PagesInfo = {
  ANALYZE: {
    title: 'Analyze',
    tabs: false,
    tabsInfo: false,
    content: <WidgetsWrapper />
  },
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
      { name: 'Species & Population', id: 'SP' },
      { name: 'Population Estimates', id: 'PE' },
      { name: 'Population Trends', id: 'PT' },
      { name: '1% threshold', id: 'Threshold' }
    ],
    info: [
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
  CREDITS: {
    title: 'Credits',
    tabs:[
      { name: 'Funders & Supporters', id: 'fs' },
      { name: 'Editors & Contributors', id: 'ec' }
    ],
    info: [
      {
        id: 'fs',
        content: <TabInfo info={FSInfo} />
      },
      {
        id: 'ec',
        content: <TabInfo info={ECInfo} />
      }
    ]
  },
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
