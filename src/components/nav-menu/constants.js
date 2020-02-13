import React from 'react';
import Login from 'components/login';

export const menuItems = [
  {
    name: 'Explore',
    dropdown: false,
    component: false,
    path: '/explore',
    type: 'EXPLORE'
  },
  {
    name: 'Background',
    dropdown: {
      options: [
        { name: 'What are Waterbirds?', id: 'WAW' },
        { name: 'What is waterbird population?', id: 'WIWP' },
        { name: 'What are flyways?', id: 'WAF' },
        { name: 'Glossary', id: 'Glossary' }
      ]
    },
    component: false,
    path: '/background',
    type: 'BACKGROUND',
   },
  {
    name: 'Data presentation',
    dropdown: {
      options: [
        { name: 'Species & Population', id: 'S&P' },
        { name: 'Population Estimates', id: 'PE' },
        { name: 'Population Trends', id: 'PT' },
        { name: '1% threshold', id: 'Threshold' } ]
    },
    component: false,
    path: '/data',
    type: 'DATA',
  },
  {
    name: 'Credits',
    dropdown: false,
    component: false,
    path: '/credits',
    type: 'CREDITS',
  },
  {
    name: 'FAQ',
    dropdown: false,
    component: false,
    path: '/faq',
    type: 'FAQ',
  }
];
