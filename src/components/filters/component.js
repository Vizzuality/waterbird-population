import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import orderBy from 'lodash/orderBy';

import Button from 'components/button';
import Select from 'react-select';
import Icon from 'components/icon';
import ActiveFilters from './active-filters';
import ClearFilters from './clear-filters';

import { fetchFamilies } from 'services/families';
import { fetchPublications } from 'services/publications';
import { fetchConservationFrameworks } from 'services/conservation';
import { fetchFlyways } from 'services/flyways';
import { fetchRedListCategories } from 'services/red-list';

import './styles.scss';

const Filters = ({
  filters,
  setFilters,
  activeFilters,
  onClick,
  publications,
  setPublications,
}) => {
  const [families, setFamilies] = useState([]);
  const [conservationFrameworks, setFrameworks] = useState([]);
  const [flyways, setFlyways] = useState([]);
  const [redList, setListCategories] = useState([]);
  const [newFiltersValues, setNewFiltersValues] = useState(filters);

  useEffect(() => {
    fetchFamilies().then((data) => setFamilies(data));
    fetchPublications().then((data) => setPublications(data.reverse()));
    fetchConservationFrameworks().then((data) => setFrameworks(data));
    fetchFlyways().then((data) => setFlyways(orderBy(data, ['flywaygroup', 'flywayrange'])));
    fetchRedListCategories().then((data) => setListCategories(data));
  }, [setPublications]);

  const handleClick = () => {
    //toggle modal
    onClick();
  };
  const handleFilters = () => {
    setFilters(newFiltersValues);
    //toggle modal
    onClick();
  };

  // Filters options
  const familyOptions = families.map((family) => {
    return { label: family.name, value: family.id };
  });

  const publicationOptions = publications.map((publication) => {
    const label = publication.description;
    return { label: label, value: publication.id };
  });

  const conservationFrameworkOptions = conservationFrameworks.map((framework) => {
    return { label: framework.code, value: framework.id };
  });

  const flywayOptions = flyways.map(({ flywayrange, flywaygroup, id }) => {
    return { label: `${flywayrange}${' '}(${flywaygroup})`, value: id };
  });

  const ramsarRegionOptions = [
    { value: 'africa', label: 'Africa' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'neotropics', label: 'Neotropics' },
    { value: 'northamerica', label: 'North America' },
    { value: 'oceania', label: 'Oceania' },
  ];

  const redListOptions = redList.map((d) => {
    return { label: `${d.iucn} (${d.description})`, value: d.id };
  });

  const OPTIONS = {
    family_id: familyOptions,
    publication_id: publicationOptions,
    framework_id: conservationFrameworkOptions,
    flyway_region_id: flywayOptions,
    ramsar_region_id: ramsarRegionOptions,
    red_list_id: redListOptions,
  };

  // filters values
  const selectedFamily = familyOptions.filter((o) => newFiltersValues.family_id.includes(o.value));
  const selectedPublication = publicationOptions.find(
    (f) =>
      newFiltersValues &&
      newFiltersValues.publication_id &&
      newFiltersValues.publication_id === f.value
  );
  const selectedFramework = conservationFrameworkOptions.filter((o) =>
    newFiltersValues.framework_id.includes(o.value)
  );
  const selectedFlywayRegion = flywayOptions.filter((o) =>
    newFiltersValues.flyway_region_id.includes(o.value)
  );
  const selectedRamsarRegion = ramsarRegionOptions.filter((o) =>
    newFiltersValues.ramsar_region_id.includes(o.value)
  );
  const selectedRedList = redListOptions.filter((o) =>
    newFiltersValues.red_list_id.includes(o.value)
  );

  const filtersInfo = [
    {
      label: 'Taxonomic',
      type: 'family_id',
      options: familyOptions,
      value: selectedFamily,
      placeholder: 'All families',
      isMulti: true,
    },
    {
      label: 'Publication',
      type: 'publication_id',
      options: publicationOptions,
      defaultValue: selectedPublication,
      value: selectedPublication,
      placeholder: 'All publications',
      isMulti: false,
    },
    {
      label: 'Conservation frameworks',
      type: 'framework_id',
      options: conservationFrameworkOptions,
      value: selectedFramework,
      placeholder: 'All frameworks',
      isMulti: true,
      info: (
        <Link target="_blank" rel="noopener noreferrer" to="/background/conservation-framework">
          <Icon name="info" />
        </Link>
      ),
    },
    {
      label: 'Biogeographic/ Flyway region',
      type: 'flyway_region_id',
      options: flywayOptions,
      value: selectedFlywayRegion,
      placeholder: 'All Biogeographic/ Flyway region',
      isMulti: true,
      info: (
        <Link target="_blank" rel="noopener noreferrer" to="/background/WAF#realms">
          <Icon name="info" />
        </Link>
      ),
    },
    {
      label: 'Ramsar region',
      type: 'ramsar_region_id',
      options: ramsarRegionOptions,
      value: selectedRamsarRegion,
      placeholder: 'All Regions',
      isMulti: true,
      info: (
        <Link target="_blank" rel="noopener noreferrer" to="/background/WAF#ramsarregions">
          <Icon name="info" />
        </Link>
      ),
    },
    {
      label: 'Global Red List',
      type: 'red_list_id',
      options: redListOptions,
      value: selectedRedList,
      placeholder: 'All',
      isMulti: true,
      info: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/data/SP#redlist"
        >
          <Icon name="info" />
        </a>
      ),
    },
  ];

  const changeFilterValue = (isMulti, type, value) => {
    setNewFiltersValues({
      ...newFiltersValues,
      [`${type}`]: isMulti ? value.map((v) => v.value) : value.value,
    });
  };

  const removeFilter = (type, value) => {
    const filtersUpdate = {
      ...newFiltersValues,
      [type]:
        type === 'publication_id'
          ? orderBy(publicationOptions, 'value', 'desc')[0]
          : newFiltersValues[type].filter((f) => f !== value),
    };
    setNewFiltersValues(filtersUpdate);
    setFilters(filtersUpdate);
  };

  return (
    <div className="c-filters">
      <h3>Filter options:</h3>
      <div className="filters-content">
        {filtersInfo.map(({ label, type, placeholder, options, isMulti, value, info }) => (
          <div key={`${type}-${label}`} className="filters">
            <div className="filter-type">
              <label>{label}</label>
              {info ? info : null}
            </div>

            <Select
              placeholder={placeholder}
              options={options}
              value={value}
              defaultValue={type === 'publication_id' && filters.publication_id}
              isMulti={isMulti}
              classNamePrefix="react-select"
              onChange={(value) => changeFilterValue(isMulti, type, value)}
              components={{
                MultiValueLabel: ({ data, selectProps, innerProps }) => {
                  const length = selectProps.value.length - 1;

                  return data === selectProps.value[0] ? (
                    <div {...innerProps}>
                      <span>{data.label}</span>
                      {length >= 1 && <span>{` + ${length}`}</span>}
                    </div>
                  ) : null;
                },
                MultiValueRemove: () => null,
              }}
            />
          </div>
        ))}
      </div>
      <div className="filters-controls">
        <ActiveFilters
          filters={newFiltersValues}
          onClick={removeFilter}
          active={activeFilters}
          options={OPTIONS}
        />

        <ClearFilters
          handleUnsetteledFilters={setNewFiltersValues}
          activeFilters={activeFilters}
          unsetteledFilters={
            newFiltersValues &&
            Object.values(newFiltersValues).filter((filter) => filter && filter.length)
          }
        />
      </div>
      <div className="filters-buttons">
        <Button
          aria-label="cancel-selected-filters"
          className="-background -tertiary -big"
          onClick={handleClick}
        >
          Cancel
        </Button>

        <Button
          aria-label="apply-filters"
          onClick={handleFilters}
          className="-background -secondary -big"
        >
          Apply filters
        </Button>
      </div>
    </div>
  );
};

Filters.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filters;
