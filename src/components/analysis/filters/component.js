import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import orderBy from 'lodash/orderBy';

import Sticky from 'react-stickynode';

import Select from 'react-select';
import Icon from 'components/icon';
import ActiveFilters from 'components/filters/active-filters';
import ClearFilters from 'components/filters/clear-filters';

import { fetchFamilies } from 'services/families';
import { fetchPublications } from 'services/publications';
import { fetchConservationFrameworks } from 'services/conservation';
import { fetchFlyways } from 'services/flyways';
import { fetchRedListCategories } from 'services/red-list';

import './styles.scss';


const FiltersAnalysys = ({ activeFilters, filters, setFilters, publications, setPublications, resetFilters, visibility, page }) => {
  const [families, setFamilies] = useState([]);
  const [conservationFrameworks, setFrameworks] = useState([]);
  const [flyways, setFlyways] = useState([]);
  const [redList, setListCategories] = useState([]);
  useEffect(() => {
    fetchFamilies().then(data => setFamilies(data));
    fetchPublications().then(data => setPublications(data.reverse()));
    fetchConservationFrameworks().then(data => setFrameworks(data));
    fetchFlyways().then(data => setFlyways(orderBy(data, ['flywaygroup', 'flywayrange'])));
    fetchRedListCategories().then(data => setListCategories(data));
  }, []);

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

  const flywayOptions = flyways.map(({ flywayrange, flywaygroup, id }) => {
    return { label: flywayrange + ' ' + `(${flywaygroup})`, value: id };
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
  const selectedFamily = filters.family_id;
  const selectedPublication = publicationOptions.find(f => filters
    && filters.publication_id
    && filters.publication_id.value === f.value);
  const selectedFramework = filters.framework_id;
  const selectedFlywayRegion = filters.flyway_region_id;
  const selectedRamsarRegion = filters.ramsar_region_id;
  const selectedRedList = filters.red_list_id;

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
      label: 'Global Red List',
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

  const changeFilterValue = (isMulti, type, value) => {
    setFilters({
      ...filters,
      [`${type}`]: isMulti ? value.map(v => v) : value,
    });
  };
  const removeFilter = (type, value) => {
    const filtersUpdate = {
      ...filters,
      [type]: type === 'publication_id'
        ? orderBy(publicationOptions, 'value', 'desc')[0]
        : filters[type].filter(f => f !== value)
    }
    setFilters(filtersUpdate)
  };

  const clearFilters = () => {
    resetFilters();
  };

  return (
    <div className="c-filters-analyse">
      {visibility && (
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
                components={{
                  MultiValueLabel: ({ data, selectProps, innerProps }) => {
                    const length = selectProps.value.length - 1;
                    return data === selectProps.value[0]
                      ? (<div {...innerProps}>
                        <span>
                          {data.label}
                        </span>
                        {length >= 1 && <span>{` + ${length}`}</span>}
                      </div>)
                      : null
                  },
                  MultiValueRemove: () => null
                }}
              />
            </div>
          )}
        </div>
      )}
      {!!activeFilters.length && page === 'ANALYZE' && (
        <Sticky innerZ={1}>
          <ActiveFilters
            className="-widgets"
            active={activeFilters}
            filters={filters}
            onClick={removeFilter} />
          <ClearFilters
            handleFilters={clearFilters}
            activeFilters={activeFilters}
            unsetteledFilters={false}
          />
        </Sticky>
      )}
    </div>
  )
}

FiltersAnalysys.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FiltersAnalysys;
