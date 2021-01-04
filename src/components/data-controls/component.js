import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
import orderBy from 'lodash/orderBy';

import Download from "components/download";
import ClearFilters from 'components/filters/clear-filters';
import ActiveFilters from 'components/filters/active-filters';
import Filters from 'components/filters';
import Modal from 'components/modal';
import Button from 'components/button';
import Icon from 'components/icon';

import { fetchFamilies } from 'services/families';
import { fetchPublications } from 'services/publications';
import { fetchConservationFrameworks } from 'services/conservation';
import { fetchFlyways } from 'services/flyways';
import { fetchRedListCategories } from 'services/red-list';

import "./styles.scss";

const DataControls = ({
  dataSpecs,
  populationsFilteredIds,
  filters,
  setFilters,
  resetFilters,
  activeFilters,
  publications,
  page,
  setPublications
}) => {
  const [families, setFamilies] = useState([]);
  const [conservationFrameworks, setFrameworks] = useState([]);
  const [flyways, setFlyways] = useState([]);
  const [redList, setListCategories] = useState([]);

  const [filtersVisibility, toggleVisibility] = useState(false);

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
    const label = publication.description;
    return { label: label, value: publication.id }
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

  const OPTIONS = {
    family_id: familyOptions,
    publication_id: publicationOptions,
    framework_id: conservationFrameworkOptions,
    flyway_region_id: flywayOptions,
    ramsar_region_id: ramsarRegionOptions,
    red_list_id: redListOptions
  };

  const handleClick = (type, value) => {

    const filtersUpdate = {
      ...filters,
      [type]: type === 'publication_id'
        ? { label: `${publications[0].description}`, value: publications[0].id }
        : filters[type].filter(f => f !== value)
    }
    setFilters(filtersUpdate);
  };

  const handleFilters = () => {
    resetFilters();
  };

  return (
    <div className={classnames('c-data-configuration', { '-filters': !filtersVisibility })}>
      <div className="data-configuration--buttons">
        <Download
          text={'Download results'}
          type={page ==='EXPLORE' ? 'explore-overview' : 'explore-detail'}
          dataSpecs={page ==='EXPLORE' ? { population_ids: populationsFilteredIds } : dataSpecs}
          filename={'populations'}
          className="-dashed"
        />
        {page === 'ANALYZE' && (
          <Button
            aria-label="show-advanced-filters"
            className="-background -secondary -big"
            onClick={toggleVisibility}
          >
            <Icon name="filter" className="-medium" />
            Advanced filters
          </Button>
        )}

      </div>
      {page !== 'EXPLORE_DETAIL' && (
        <>
          <ActiveFilters
            filters={filters}
            onClick={handleClick}
            heading={'Filtered by:'}
            active={activeFilters}
            options={OPTIONS}
          />
          <ClearFilters
            handleFilters={handleFilters}
            activeFilters={activeFilters}
            unsetteledFilters={false}
          />
        </>
      )}

      <Modal
        isOpen={filtersVisibility}
        onRequestClose={() => toggleVisibility(false)}
        style={{ width: '900px' }}
      >
        <Filters
          visibility={filtersVisibility}
          page={page}
          onClick={toggleVisibility}
        />
      </Modal>
    </div>
  );
};

DataControls.propTypes = {
  info: PropTypes.shape({})
};

export default DataControls;
