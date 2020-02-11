import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import Dropdown from 'react-dropdown';

import { menuItems } from './constants';

import './styles.scss';

const NavBar = ({ setRouter }) => {
  const handleChange = (item) => setRouter({ type: item.type, pathname: item.path })

  return (
    <ul className="c-nav-bar">
      {menuItems.map(
        item => (!item.dropdown && !item.component)
        ? <li className="nav-bar-item"><Link to={item.path}>{item.name}</Link></li>
        : (item.dropdown && !item.component &&
            <li className="nav-bar-item">
                <Dropdown
                  options={item.dropdown.options}
                  placeholder={item.name}
                  onChange={() => handleChange(item)}
                />
            </li>)
        || ((!item.dropdown && item.component) &&
          <li className="nav-bar-item">{item.component}</li>)
      )}
    </ul>
  )
};

NavBar.propTypes = {
  setRouter: PropTypes.func.isRequired
};

 export default NavBar;
