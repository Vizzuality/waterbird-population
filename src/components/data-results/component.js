import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from 'components/button';
import TableCard from 'components/table-card';

import image from 'images/ostralegus.jpg'

import './styles.scss';

const DataResults = ({ family }) => {

  const [isCollapsed, toggleCollapse] = useState(true);

  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  }

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
        <div className="results-title">
          <h2>
            <span>Species:</span>
            <span className="name">Haematopus ostralegus (Eurasian Oystercatcher)</span>
            <span className="tag">LEAST CONCERN</span>

          </h2>
          <button type="button">Collapse</button>
        </div>
        <div className="results-description">
          <img src={image} alt='Haematopodidae' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <TableCard />
      </div>

    </section>
  );
};

DataResults.propTypes = {
  family: PropTypes.string.isRequired
}

export default DataResults;
