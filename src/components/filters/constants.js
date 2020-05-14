import React from  'react';
import Link from 'redux-first-router-link';
import Icon from 'components/icon';


const filters = [
  {
    'label': 'Taxonomic',
    'type': 'families',
    'options': [
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
    ]
  },
  {
    'label': 'Publication',
    'type': 'publications',
    'options': [
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
    ]
  },
  {
    'label': 'Conservation Framework',
    'type': 'Conservation Framework',
    'options': [
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
    ],
    'info': (
      <Link to="/background/Glossary">
        <Icon name="info" />
      </Link>
    )
  },
  {
    'label': 'Biogeographic/ Flyway region',
    'type': 'Biogeographic/ Flyway region',
    'options': [
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
    ],
    info: (
    <Link target="_blank" rel="noopener noreferrer" to="/images/Biogeographic">
    <Icon name="info" />
  </Link>
    )
  },
  {
    'label': 'Ramsar region',
    'type': 'Ramsar region',
    'options': [
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
    ],
    info: (
      <Link target="_blank" rel="noopener noreferrer" to="/images/Ramsar">
        <Icon name="info" />
      </Link>
    )
  },
  {
    'label': 'Red list',
    'type': 'Red list',
    'options': [
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
    ],
    info: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.iucnredlist.org/resources/categories-and-criteria#categories">
        <Icon name="info" />
      </a>
    )
  }
];

export default filters;
