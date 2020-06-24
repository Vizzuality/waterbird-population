import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Button from 'components/button';
import SpeciesData from 'components/species-data';

// services
import { fetchSpecies } from 'services/species';

import './styles.scss';


const DataResults = ({ family }) => {

  const [isCollapsed, toggleCollapse] = useState(true);
  const [species, setSpecies] = useState([]);

  const handleClick = () => {
    fetchSpecies(family.id).then(({ data }) => setSpecies(data.rows))
    toggleCollapse(!isCollapsed)
  };


  return (
    <section className="c-data-results">
      <div className="results-title">
        <h1>
          <span>Family:</span>
          <span class="name">{family.name}</span>
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
      <div className={classnames('results-detail', {
        '-hidden': isCollapsed
      })}>
        {species.map((specie) => (
          <SpeciesData info={specie} />
        ))}
      </div>
    </section>
  );
};

DataResults.propTypes = {
  family: PropTypes.string.isRequired
}

export default DataResults;
