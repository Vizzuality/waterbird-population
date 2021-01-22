import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Button from 'components/button';
import SpeciesList from 'components/species-list';

import './styles.scss';

const FamilyListItem = ({ family, allCollapsed }) => {

  const [isCollapsed, toggleCollapse] = useState(allCollapsed);

  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };

  useEffect(() => {
    toggleCollapse(allCollapsed)
  }, [allCollapsed]);

  return (
    <section className="c-family-results">
      <div onClick={handleClick} className="family-results-header">
        <h1>
          <span>Family:</span>
          <span className="family-name">{family.englishname}</span>
          <span className="family-scientificname">({family.name})</span>
        </h1>
        <Button
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
          onClick={handleClick}
          className={classnames('-border -secondary',
            {
              '-collapse': !isCollapsed
            }
          )}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </Button>
      </div>

      {!isCollapsed && (
        <div className="family-results-detail">
          <SpeciesList familyId={family.id} />
        </div>
      )}

    </section>
  );
};

FamilyListItem.propTypes = {
  family: PropTypes.shape({}).isRequired
}

export default FamilyListItem;
