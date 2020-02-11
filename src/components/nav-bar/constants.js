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
        { label: 'What are Waterbirds?', value: 'WAW' },
        { label: 'What is waterbird population?', value: 'WIWP' },
        { label: 'What are flyways?', value: 'WAF' },
        { label: 'Glossary', value: 'GLOSSARY' }
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
        { label: 'Species & Population', value: 1 },
        { label: 'Population Estimates', value: 2 },
        { label: 'Population Trends', value: 3 },
        { label: '1% threshold', value: 4 } ]
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
