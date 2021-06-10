import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// components
import Button from 'components/button';
import Icon from 'components/icon';
import Modal from 'components/modal';
import Filters from 'components/filters';

import './styles.scss';


const Search = ({ activeFilters, families, setSearch, searchValue }) => {

  const inputRef = useRef();

  const updateSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  activeFilters = []
  const [isOpen, toggleModal] = useState(false);

  const handleClick = () => {
    toggleModal(!isOpen);
  };

  const handleClearSearch = () => {
    const { current } = inputRef;
    return current.value = '';
  };


  return (
    <div className="c-search">
      <div className="search-input-container">
      <input
        autoFocus
        ref={inputRef}
        type="search"
        className="search-input"
        placeholder="Search family, species, conservation framework..."
        value={searchValue}
        onChange={updateSearch}
      />
      <button
        className={cx('search-input--btn', { '-hidden': searchValue === '' } )}
        onClick={handleClearSearch}
      >
        x
      </button>
      </div>

      <Button
        aria-label="show-advanced-filters"
        className="-background -secondary -big"
        onClick={handleClick}
      >
        <Icon name="filter" className="-medium" />
        Advanced filters
            </Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
        style={{ width: '900px' }}
      >
        <Filters
          activeFilters={activeFilters}
          families={families}
          onClick={toggleModal}
        />
      </Modal>
    </div>
  )
};

Search.propTypes = {
  activeFilters: PropTypes.array
};

Search.defaultProps = {
  activeFilters: []
};

export default Search;
