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
        { label: 'What are Waterbirds', value: 1 },
        { label: 'What is waterbird population', value: 2 }
      ]
    },
    component: false,
    path: '/background'
  },
  {
    name: 'data presentation',
    dropdown: {
      options: [
        { value: 'What are Waterbirds', label: 'What are Waterbirds' },
        { value: 'What is waterbird population', label: 'What is waterbird population' }
      ]
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
