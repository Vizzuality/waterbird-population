import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { fetchImages } from 'services/species';

// components
import Button from 'components/button';
import Icon from 'components/icon';
import PopulationsList from 'components/populations-list';

import './styles.scss';

const SpeciesListItem = ({ specie }) => {
  const { commonname, redlistcategory, scientificname, color, backgroundColor, specid } = specie;

  const [image, setImage] = useState('');
  const [isCollapsed, toggleCollapse] = useState(true);

  useEffect(() => {
    fetchImages(scientificname).then((data) => setImage(data));
  }, [scientificname]);

  const handleClick = () => {
    toggleCollapse(!isCollapsed);
  };

  return (
    <section className="c-species-results">
      <div className="species-results-header">
        <div className="species-results-title">
          <h2 onClick={handleClick}>
            <span>Species:</span>
            <span className="name -specific">{commonname}</span>
            <span className="name -scientific">({scientificname})</span>
            <span
              style={{ backgroundColor: backgroundColor }}
              className={classnames(`tag ${color}`)}
            >
              {redlistcategory}
            </span>
          </h2>

          <a
            href={`http://datazone.birdlife.org/species/factsheet/${specid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="launch" className="-big" />
          </a>
        </div>

        <Button
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
          className={classnames('-border -secondary', { '-collapse': !isCollapsed })}
          onClick={handleClick}
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </Button>
      </div>
      <div className={classnames('species-results-description', { '-hidden': isCollapsed })}>
        {image.thumbnail && <img src={image.thumbnail.source} alt={image.title} />}
      </div>

      {!isCollapsed && <PopulationsList specieId={specie.id} />}
    </section>
  );
};

SpeciesListItem.propTypes = {
  specie: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  commonname: PropTypes.string.isRequired,
  redlistcategory: PropTypes.string.isRequired,
  scientificname: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  specid: PropTypes.string.isRequired,
};

export default SpeciesListItem;
