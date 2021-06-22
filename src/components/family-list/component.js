import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import FamilyListItem from 'components/family-list-item';
import Spinner from 'components/spinner';
import Button from 'components/button';

import './styles.scss';

const FamilyList = ({ populationFamilies, loading, activeFilters }) => {
  const [isCollapsed, toggleCollapse] = useState(!!activeFilters.length);

  useEffect(() => {
    toggleCollapse(!activeFilters.length);
  }, [activeFilters]);

  if (loading) return <Spinner />;

  const handleClick = () => {
    toggleCollapse(!isCollapsed);
  };

  if (!populationFamilies) return null;

  return (
    <div className="c-data-results">
      {!!populationFamilies.length && (
        <>
          <Button
            aria-label={isCollapsed ? 'Expand All' : 'Collapse All'}
            className={classnames('data-results-btn -border -secondary', {
              '-collapse': !isCollapsed,
            })}
            onClick={handleClick}
          >
            {isCollapsed ? 'Expand All' : 'Collapse All'}
          </Button>
          {populationFamilies.map((family) => (
            <FamilyListItem key={family.id} family={family} allCollapsed={isCollapsed} />
          ))}
        </>
      )}

      {!populationFamilies.length && (
        <div className="data-empty">
          Sorry, we couldn&rsquo;t find any results matching your search.
        </div>
      )}
    </div>
  );
};

FamilyList.propTypes = {
  populationFamilies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.bool.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FamilyList;
