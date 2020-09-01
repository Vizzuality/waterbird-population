import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Button from 'components/button';
import SpeciesList from 'components/species-list';

import './styles.scss';


const FamilyListItem = ({ family }) => {

  const [isCollapsed, toggleCollapse] = useState(true);

  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };


  return (
    <section className="c-data-results">
      <div onClick={handleClick} className="results-title">
        <h1>
          <span>Family:</span>
          <span className="name">{family.name}</span>
        </h1>
        <Button
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
        <div className="results-detail">
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
