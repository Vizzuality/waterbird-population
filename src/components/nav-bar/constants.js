import React from 'react';
import Login from 'components/login';

export const menuItems = [
  {
    name: 'explore',
    dropdown: false,
    component: false,
    path: '/explore',
  },
  {
    name: 'background',
    dropdown: {
      options: [
        { label: 'What are Waterbirds?', value: 1 },
        { label: 'What is waterbird population?', value: 2 },        ,
        { label: 'What are flyways?', value: 3 },
        { label: 'Glossary', value: 4 }
      ]
    },
    component: false,
    path: '/background'
  },
  {
    name: 'data presentation',
    dropdown: {
      options: [
        { label: 'Species & Population', value: 1 },
        { label: 'Population Estimates', value: 2 },        ,
        { label: 'Population Trends', value: 3 },
        { label: '1% threshold', value: 4 } ]
    },
    component: false,
    path: '/data'
  },
  {
    name: 'credits',
    dropdown: {
      options: [
        { label: 'What are Waterbirds', value: 1 },
        { label: 'What is waterbird population', value: 2 }
      ]
    },
    component: false,
    path: '/credits'
  },
  {
    name: 'faq',
    dropdown: false,
    component: false,
    path: '/faq'
  },
  {
    name: 'login',
    dropdown: false,
    component: <Login />
  }
];
