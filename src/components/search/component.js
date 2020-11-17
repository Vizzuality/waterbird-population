import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'component/button';
import Icon from 'components/icon';
import Modal from 'components/modal';
import Filters from 'components/filters';

import './styles.scss';


const Search = ({ activeFilters, families, setSearch }) => {

  const updateSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  activeFilters = []
  const [isOpen, toggleModal] = useState(false);

  const handleClick = () => {
    toggleModal(!isOpen);
  }
  return (
    <div className="c-search">
      <input
        autoFocus
        type="search"
        className="search-input"
        placeholder='Search family, species, conservation framework...'
        onChange={updateSearch}
      />
      <Button
        aria-label="show-advanced-filters"
        className="-background -secondary -huge"
        onClick={handleClick}
      >
        <Icon name="filter" className="-big"/>
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
