import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { fetchImages } from 'services/species';

// components
import Button from 'components/button';
import PopulationsList from 'components/populations-list';

import './styles.scss';


const SpeciesListItem = ({ specie }) => {
  const {
    commonname,
    redlistcategory,
    scientificname,
    color,
  } = specie;

  const [image, setImage] = useState('');
  const [isCollapsed, toggleCollapse] = useState(true);

  useEffect(() => {
    fetchImages(scientificname).then(data => setImage(data));
  }, [scientificname]);

  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };

  return (
    <section className="c-data-results">
      <div onClick={handleClick} className="results-title">
        <h2>
          <span>Species:</span>
          <span className="name -scientific">{scientificname}</span>
          <span className="name -specific">({commonname})</span>
          <span style={{ backgroundColor: color }} className="tag">{redlistcategory}</span>
        </h2>
        <Button
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
          className={classnames('-border -secondary',
            { '-collapse': !isCollapsed }
          )}
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </Button>
      </div>
      <div className={classnames('results-description', {
        '-hidden': isCollapsed
      })}>
        {image.thumbnail && <img src={image.thumbnail.source} alt={image.title} />}
        <p>{image.description && `${image.description.charAt(0).toUpperCase() + image.description.slice(1)}.`}</p>
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
