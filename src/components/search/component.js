import React from 'react';
import Button from 'components/button';
import Icon from 'components/icon';

import './styles.scss';


const Search = () => {

  const updateSearch = (e) => {

  }
  const handleClick = () => {
  }

  return (
    <div className="c-search">
      <input
        autoFocus
        type="text"
        className="search-input"
        placeholder='Search family, species, region, conservation framework...'
        onChange={updateSearch}
      />
    <Button className="secondary big" onClick={handleClick}>
      {/* <Icon name="filters"/> */}
        Advanced filters
      </Button>
    </div>
  )
};

export default Search;
