import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

import Button from 'components/button';
import Select from 'components/select';

import { fetchFamilies } from 'services/families';
import { fetchPublications } from 'services/publications';
import { fetchConservationFrameworks } from 'services/conservation';
import { fetchFlyways } from 'services/flyways';
import { fetchRedListCategories } from 'services/red-list';

import './styles.scss';

const Filters = ({ activeFilters, onClick }) => {

  const [families, setFamilies] = useState([]);
  const [publications, setPublications] = useState([]);
  const [conservationFrameworks, setFrameworks] = useState([]);
  const [flyways, setFlyways] = useState([]);
  const [redList, setListCategories] = useState([]);

  useEffect(() => {
    fetchFamilies().then(data => setFamilies(data));
    fetchPublications().then(data => setPublications(data));
    fetchConservationFrameworks().then(data => setFrameworks(data));
    fetchFlyways().then(data => setFlyways(data));
    fetchRedListCategories().then(data => setListCategories(data));
  }, [families, publications, conservationFrameworks, flyways, redList]);

  const handleClick = () => {
    onClick(false);
  }

  const familyOptions = families.map(family => {
    return { label: family.name, value: family.name }
  });

  const publicationOptions = publications.map(publication => {
    return { label: publication.description, value: publication.description }
  });

  const conservationFrameworkOptions = conservationFrameworks.map(framework => {
    return { label: framework.code, value: framework.code }
  });

  const flywayOptions = flyways.map(flyway => {
    return { label: flyway.flywayrange, value: flyway.flywayrange }
  });

  const redListOptions = redList.map(d => {
    return { label: `${d.iucn} (${d.description})`, value: d.iucn }
  });

  const filtersInfo = [
    {
      label: 'Taxonomic',
      type: 'families',
      options: familyOptions,
      placeholder: 'All families'
    },
    {
      'label': 'Publication',
      'type': 'publications',
      'options': publicationOptions,
      placeholder: 'All publications'
    },
    {
      'label': 'Conservation Framework',
      'type': 'Conservation Framework',
      'options': conservationFrameworkOptions,
      placeholder: 'All frameworks',
      'info': (
        <Link to="/background/Glossary">
          <Icon name="info" />
        </Link>
      )
    },
    {
      'label': 'Biogeographic/ Flyway region',
      'type': 'Biogeographic/ Flyway region',
      'options': flywayOptions,
      placeholder: 'All Biogeographic/ Flyway region',
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
        { value: 'africa', label: 'Africa' },
        { value: 'asia', label: 'Asia' },
        { value: 'europe', label: 'Europe' },
        { value: 'neotropics', label: 'Neotropics' },
        { value: 'northamerica', label: 'North America' },
        { value: 'oceania', label: 'Oceania' }
      ],
      placeholder: 'All Regions',
      info: (
        <Link target="_blank" rel="noopener noreferrer" to="/images/Ramsar">
          <Icon name="info" />
        </Link>
      )
    },
    {
      'label': 'Red list',
      'type': 'Red list',
      'options': redListOptions,
      info: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.iucnredlist.org/resources/categories-and-criteria#categories">
          <Icon name="info" />
        </a>
      )
    }
  ]


  return (
    <div className="c-filters">
      <h3>Filter options:</h3>
      <div className="filters-content">

        {filtersInfo.map(({ label, placeholder, options, info }) =>
          <div className="filters">
{placeholder, 'placeholder'}
            <div className="filter-type">
              <label>{label}</label>
              {info ? info : null}
            </div>
            <Select
              placeholder={placeholder}
              options={options}
              classNamePrefix="react-select"
            />
          </div>
        )}
      </div>
      <div className="filters-buttons">
        <Button
          className="-background -tertiary -big"
          onClick={handleClick}
        >
          Cancel
        </Button>
        <Button
          className={classnames('-background -secondary -big', {
            '-disable': activeFilters && activeFilters.length <= 0
          })}>
          Apply filters
        </Button>
      </div>
    </div>
  )
}

Filters.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Filters;
