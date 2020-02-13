import React from 'react';

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
    {/* <Button onClick={handleClick}>Advanced filters</Button> */}
    </div>
  )
};

export default Search;
