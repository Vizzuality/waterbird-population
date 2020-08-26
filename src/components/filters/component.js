import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

import Button from 'components/button';
import Select from 'react-select';
import Icon from 'components/icon';

import { fetchFamilies } from 'services/families';
import { fetchPublications } from 'services/publications';
import { fetchConservationFrameworks } from 'services/conservation';
import { fetchFlyways } from 'services/flyways';
import { fetchRedListCategories } from 'services/red-list';

import './styles.scss';

const Filters = ({ filters, setFilters, resetFilters, onClick }) => {

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
  }, []);

  const handleClick = () => {
    onClick();
    resetFilters();
  };

  // filters values
  const selectedFamily = filters.family;
  const selectedPublication = filters.publication;
  const selectedFramework = filters.framework;
  const selectedFlywayRegion = filters.flyway_region;
  const selectedRamsarRegion = filters.ramsar_region;
  const selectedRedList = filters.red_list;

  // Filters options
  const familyOptions = families.map(family => {
    return { label: family.name, value: family.id }
  });

  const publicationOptions = publications.map(publication => {
    return { label: publication.description, value: publication.id }
  });

  const conservationFrameworkOptions = conservationFrameworks.map(framework => {
    return { label: framework.code, value: framework.id }
  });

  const flywayOptions = flyways.map(flyway => {
    return { label: flyway.flywayrange, value: flyway.id }
  });

  const redListOptions = redList.map(d => {
    return { label: `${d.iucn} (${d.description})`, value: d.iucn }
  });

  const filtersInfo = [
    {
      label: 'Taxonomic',
      type: 'family',
      options: familyOptions,
      value: selectedFamily,
      placeholder: 'All families'
    },
    {
      label: 'Publication',
      type: 'publication',
      options: publicationOptions,
      value: selectedPublication,
      placeholder: 'All publications'
    },
    {
      label: 'Conservation Framework',
      type: 'framework',
      options: conservationFrameworkOptions,
      value: selectedFramework,
      placeholder: 'All frameworks',
      'info': (
        <Link to="/background/Glossary">
          <Icon name="info" />
        </Link>
      )
    },
    {
      label: 'Biogeographic/ Flyway region',
      type: 'flyway_region',
      options: flywayOptions,
      value: selectedFlywayRegion,
      placeholder: 'All Biogeographic/ Flyway region',
      info: (
        <Link target="_blank" rel="noopener noreferrer" to="/images/Biogeographic">
          <Icon name="info" />
        </Link>
      )
    },
    {
      label: 'Ramsar region',
      type: 'ramsar_region',
      options: [
        { value: 'africa', label: 'Africa' },
        { value: 'asia', label: 'Asia' },
        { value: 'europe', label: 'Europe' },
        { value: 'neotropics', label: 'Neotropics' },
        { value: 'northamerica', label: 'North America' },
        { value: 'oceania', label: 'Oceania' }
      ],
      value: selectedRamsarRegion,
      placeholder: 'All Regions',
      info: (
        <Link target="_blank" rel="noopener noreferrer" to="/images/Ramsar">
          <Icon name="info" />
        </Link>
      )
    },
    {
      label: 'Red list',
      type: 'red_list',
      options: redListOptions,
      value: selectedRedList,
      placeholder: 'All',
      info: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.iucnredlist.org/resources/categories-and-criteria#categories">
          <Icon name="info" />
        </a>
      )
    }
  ];

  const changeFilterValue = (type, { value }) => {
    setFilters({ [`${type}_id`]: value });
  };

  return (
    <div className="c-filters">
      <h3>Filter options:</h3>
      <div className="filters-content">
        {filtersInfo.map(({ label, type, placeholder, options, value, info }) =>
          <div className="filters">
            <div className="filter-type">
              <label>{label}</label>
              {info ? info : null}
            </div>
            <Select
              placeholder={placeholder}
              options={options}
              value={value}
              classNamePrefix="react-select"
              onChange={value => changeFilterValue(type, value)}
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
            // '-disable': filters && activeFilters.length <= 0
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
