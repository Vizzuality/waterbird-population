export const menuItems = [
  {
    name: 'Explore',
    dropdown: false,
    component: false,
    path: '/explore',
    type: 'EXPLORE'
  },
  {
    name: 'Analyze',
    dropdown: false,
    component: false,
    path: '/analyze',
    type: 'ANALYZE'
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
        { name: 'Species & Population', id: 'SP' },
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
    dropdown: {
      options: [
        { name: 'Funders & Supporters', id: 'fs' },
        { name: 'Editors & Contributors', id: 'ec' }
      ]
    },
    component: false,
    path: '/credits',
    type: 'CREDITS',
  },
  {
    name: 'About',
    dropdown: {
      options: [
        { name: 'Info', id: 'info' },
        { name: 'Contact us', id: 'contact' },
        { name: 'Terms of use', id: 'terms' },
        { name: 'Frequently Asked Questions', id: 'faqs' }
      ],
    },
    component: false,
    path: '/about',
    type: 'ABOUT',
  },
  {
    name: 'Downloads',
    dropdown: {
      options: [
        { name: 'Downloads', id: 'downloads' },
        { name: 'References', id: 'references' }
      ],
    },
    component: false,
    path: '/downloads',
    type: 'DOWNLOADS',
  }
];
