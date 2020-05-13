import React from  'react';
import Link from 'redux-first-router-link';
import Icon from 'components/icon';


const filters = [
  {
    'type': 'Taxonomic',
    'options': [
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
    ]
  },
  {
    'type': 'Publication',
    'options': [
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
      { 'label': '', 'value': ''},
    ]
  },
  {
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
