import React from 'react';
import Login from 'components/login';

export const menuItems = [
  {
    name: 'explore',
    dropdown: false,
    component: false,
    path: '/explore',
    type: 'EXPLORE'
  },
  {
    name: 'background',
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
    name: 'data presentation',
    dropdown: {
      options: [
        { name: 'Species & Population', id: 'S&P' },
        { name: 'Population Estimates', id: 'PE' },
        { name: 'Population Trends', id: 'PT' },
        { name: '1% threshold', id: 'Treshold' } ]
    },
    component: false,
    path: '/data',
    type: 'DATA',
  },
  {
    name: 'credits',
    dropdown: false,
    component: false,
    path: '/credits',
    type: 'CREDITS',
  },
  {
    name: 'faq',
    dropdown: false,
    component: false,
    path: '/faq',
    type: 'FAQ',
  },
  {
    name: 'login',
    dropdown: false,
    component: <Login />
  }
];
