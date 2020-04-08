import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Icon from 'components/icon';
import Modal from 'components/modal';
import Filters from 'components/filters';

import './styles.scss';


const Search = ({ activeFilters }) => {

  const updateSearch = (e) => {

  }

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
        placeholder='Search family, species, region, conservation framework...'
        onChange={updateSearch}
      />
      <Button className="-background -secondary -huge" onClick={handleClick}>
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
        onClick={toggleModal}/>
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
