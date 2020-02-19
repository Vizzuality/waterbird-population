import React from 'react';
import PropTypes from 'prop-types';

import image from 'images/ostralegus.jpg'

import CardTableInfo from './constants';

import './styles.scss';


const SearchResults = ({ }) => {
  const info = CardTableInfo; // info coming from props when we get data

  return (
    <div className="c-search-results">
      <div className="results-title">
        <h1>
          <span>Family:</span>
          <span class="name">Haematopodidae</span>
        </h1>
        <button type="button">Collapse</button>

      </div>
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
    </div>
  )
}


SearchResults.propTypes = {
  info: PropTypes.shape({}).isRequired
}

export default SearchResults;
