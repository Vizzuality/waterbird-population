import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Button from 'components/button';
import PopulationsCard from 'components/populations-card';

// services
import { fetchPopulations } from 'services/population';


import image from 'images/ostralegus.jpg'

import './styles.scss';


const SpeciesData = ({ info, populations, setPopulations }) => {
  const {
    commonname,
    description,
    familyenglish,
    iucn,
    scientificname,
    specieid
  } = info;
  const [isCollapsed, toggleCollapse] = useState(true);
  const handleClick = () => {
    fetchPopulations(specieid).then(data => setPopulations({ id: specieid, data}));
    toggleCollapse(!isCollapsed)
  };

  return (
    <section className="c-data-results">
      <div className="results-title">
        <h2>
          {console.log(populations)}
          <span>Species:</span>
          <span className="name -cientific">{scientificname}</span>
          <span className="name -specific">({commonname})</span>
          <span className="tag">{description}</span>
        </h2>
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
      <div className={classnames('results-description', {
        '-hidden': isCollapsed
      })}>
        <img src={image} alt='Haematopodidae' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <PopulationsCard specieId={specieid} />

    </section>
  );
};

SpeciesData.propTypes = {
  family: PropTypes.string.isRequired
}

export default SpeciesData;
