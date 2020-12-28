import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
      <div className="wrapper">
        <div className="row">
          <div className="col-md-10 col-sm-9">
            <input
              autoFocus
              type="search"
              className="search-input"
              placeholder='Search family, species, conservation framework...'
              onChange={updateSearch}
            />
          </div>
          <div className="col-md-2 col-sm-3">
            <div className="search-filters__btn">
              <button
                aria-label="show-advanced-filters"
                className="-background -secondary -big"
                onClick={handleClick}
              >
                <Icon name="filter" className="-medium" />
                Advanced filters
              </button>
            </div>
          </div>
        </div>
      </div>
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
