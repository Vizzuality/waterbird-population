import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import FamilyListItem from 'components/family-list-item';
import Spinner from 'components/spinner';
import Button from 'components/button';

import './styles.scss';

const FamilyList = ({ populationFamilies, loading, activeFilters }) => {

  const [isCollapsed, toggleCollapse] = useState(
    !!activeFilters.length
  );

  useEffect(() => {
    toggleCollapse(!activeFilters.length)
  }, [activeFilters]);

  if (loading) return <Spinner />

  const handleClick = () => {
    toggleCollapse(!isCollapsed);
  };

  return (
    <div className="c-population-results">
      <Button
          aria-label={isCollapsed ? 'Expand All' : 'Collapse All'}
          className={classnames('-border -secondary',
            { '-collapse': !isCollapsed }
          )}
          onClick={handleClick}
        >
          {isCollapsed ? 'Expand All' : 'Collapse All'}
        </Button>
      {!populationFamilies || !populationFamilies.length
        ? <div>Sorry, we couldn't find any results matching your search.</div>
        : populationFamilies.map(family => {
          return (
            <FamilyListItem
              key={family.id}
              family={family}
              allCollapsed={isCollapsed}
            />
          )
        }
        )}
    </div>
  );
};

FamilyList.propTypes = {
  populationFamilies: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  activeFilters: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
};

export default FamilyList;
