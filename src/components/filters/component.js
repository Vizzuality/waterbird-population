import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';
import orderBy from 'lodash/orderBy';

import Button from 'components/button';
import Select from 'react-select';
import Icon from 'components/icon';
import ActiveFilters from './active-filters';

import { fetchFamilies } from 'services/families';
import { fetchPublications } from 'services/publications';
import { fetchConservationFrameworks } from 'services/conservation';
import { fetchFlyways } from 'services/flyways';
import { fetchRedListCategories } from 'services/red-list';

import './styles.scss';

const Filters = ({ filters, setFilters, onClick, lastPublicationData, publications, setPublications }) => {
  const [families, setFamilies] = useState([]);
  const [conservationFrameworks, setFrameworks] = useState([]);
  const [flyways, setFlyways] = useState([]);
  const [redList, setListCategories] = useState([]);
  const [newFiltersValues, setNewFiltersValues] = useState(filters);

  useEffect(() => {
    fetchFamilies().then(data => setFamilies(data));
    fetchPublications().then(data => setPublications(data));
    fetchConservationFrameworks().then(data => setFrameworks(data));
    fetchFlyways().then(data => setFlyways(data));
    fetchRedListCategories().then(data => setListCategories(data));
  }, []);

  const handleClick = () => {
    onClick();
  };

  const handleFilters = () => {
    setFilters(newFiltersValues)
    onClick();
  };

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

  const flywayOptions = flyways.map(({ flywayrange, id }) => {
    return { label: flywayrange, value: id }
  });

  const ramsarRegionOptions = [
    { value: 'africa', label: 'Africa' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'neotropics', label: 'Neotropics' },
    { value: 'northamerica', label: 'North America' },
    { value: 'oceania', label: 'Oceania' }
  ];

  const redListOptions = redList.map(d => {
    return { label: `${d.iucn} (${d.description})`, value: d.id }
  });

  // filters values
  const selectedFamily = familyOptions.find(f => newFiltersValues
    && newFiltersValues.family_id && newFiltersValues.family_id === f.value);
  const selectedPublication = publicationOptions.find(f => newFiltersValues
    && newFiltersValues.publication_id
    && newFiltersValues.publication_id.value === f.value);
  const selectedFramework = conservationFrameworkOptions.find(f => newFiltersValues
    && newFiltersValues.framework_id && newFiltersValues.framework_id === f);
  const selectedFlywayRegion = flywayOptions.find(f => newFiltersValues
    && newFiltersValues.flyway_region_id && newFiltersValues.flyway_region_id === f.value);
  const selectedRamsarRegion = ramsarRegionOptions.find(f => newFiltersValues
    && newFiltersValues.ramsar_region_id && newFiltersValues.ramsar_region_id === f.value);
  const selectedRedList = redListOptions.find(f => newFiltersValues
    && newFiltersValues.red_list_id && newFiltersValues.red_list_id === f.value);

  const filtersInfo = [
    {
      label: 'Taxonomic',
      type: 'family_id',
      options: familyOptions,
      value: selectedFamily,
      placeholder: 'All families',
      isMulti: true
    },
    {
      label: 'Publication',
      type: 'publication_id',
      options: publicationOptions,
      defaultValue: selectedPublication,
      value: selectedPublication,
      placeholder: 'All publications',
      isMulti: false
    },
    {
      label: 'Conservation Framework',
      type: 'framework_id',
      options: conservationFrameworkOptions,
      value: selectedFramework,
      placeholder: 'All frameworks',
      isMulti: true,
      info: (
        <Link to="/background/Glossary">
          <Icon name="info" />
        </Link>
      )
    },
    {
      label: 'Biogeographic/ Flyway region',
      type: 'flyway_region_id',
      options: flywayOptions,
      value: selectedFlywayRegion,
      placeholder: 'All Biogeographic/ Flyway region',
      isMulti: true,
      info: (
        <Link target="_blank" rel="noopener noreferrer" to="/images/Biogeographic">
          <Icon name="info" />
        </Link>
      )
    },
    {
      label: 'Ramsar region',
      type: 'ramsar_region_id',
      options: ramsarRegionOptions,
      value: selectedRamsarRegion,
      placeholder: 'All Regions',
      isMulti: true,
      info: (
        <Link target="_blank" rel="noopener noreferrer" to="/images/Ramsar">
          <Icon name="info" />
        </Link>
      )
    },
    {
      label: 'Red list',
      type: 'red_list_id',
      options: redListOptions,
      value: selectedRedList,
      placeholder: 'All',
      isMulti: true,
      info: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.iucnredlist.org/resources/categories-and-criteria#categories">
          <Icon name="info" />
        </a>
      )
    }
  ];

  const changeFilterValue = (isMulti, type, value ) => {
    setNewFiltersValues({
      ...newFiltersValues,
      [`${type}`]: isMulti ? value.map(v => v) : value,
    });
  };
  const removeFilter = (type, value) => {
    const filtersUpdate = {
      ...newFiltersValues,
      [type]: type === 'publication_id'
        ? orderBy(publicationOptions, 'value', 'desc')[0]
        : newFiltersValues[type].filter(f => f !== value)}
    setNewFiltersValues(filtersUpdate);
    setFilters(filtersUpdate)
  };

  return (
    <div className="c-filters">
      <h3>Filter options:</h3>
      <div className="filters-content">
        {filtersInfo.map(({ label, type, placeholder, options, isMulti, defaultValue, value, info }) =>
          <div className="filters">
            <div className="filter-type">
              <label>{label}</label>
              {info ? info : null}
            </div>
            <Select
              placeholder={placeholder}
              options={options}
              value={value}
              isMulti={isMulti}
              classNamePrefix="react-select"
              onChange={value => changeFilterValue(isMulti, type, value)}
            />
          </div>
        )}
      </div>
      <ActiveFilters filters={newFiltersValues} onClick={removeFilter} />
      <div className="filters-buttons">
        <Button
          className="-background -tertiary -big"
          onClick={handleClick}
        >
          Cancel
        </Button>
        <Button
          onClick={handleFilters}
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
