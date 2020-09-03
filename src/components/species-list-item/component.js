import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Button from 'components/button';
import PopulationsList from 'components/populations-list';

import image from 'images/ostralegus.jpg'

import './styles.scss';


const SpeciesListItem = ({ specie }) => {
  const {
    commonname,
    redlistcategory,
    scientificname,
    color
  } = specie;

  const [isCollapsed, toggleCollapse] = useState(true);
  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };

  return (
    <section className="c-data-results">
      <div onClick={handleClick} className="results-title">
        <h2>
          <span>Species:</span>
          <span className="name -cientific">{scientificname}</span>
          <span className="name -specific">({commonname})</span>
          <span style={{ backgroundColor: color }} className="tag">{redlistcategory}</span>
        </h2>
        <Button
          className={classnames('-border -secondary',
            {
              '-collapse': !isCollapsed
            }
          )}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </Button>
      </div>
      <div className={classnames('results-description', {
        '-hidden': isCollapsed
      })}>
        <img src={image} alt='Haematopodidae' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      {!isCollapsed && (
        <PopulationsList specieId={specie.id} />
      )}
    </section>
  );
};

SpeciesListItem.propTypes = {
  specie: PropTypes.shape({}).isRequired
}

export default SpeciesListItem;
