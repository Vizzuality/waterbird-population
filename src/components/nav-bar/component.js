import React from 'react';
import Link from 'redux-first-router-link';
import Dropdown from 'react-dropdown';

import { menuItems } from './constants';

import './styles.scss';

const NavBar = ({ setActiveTab }) => {
  const handleChange = (e, item) => {
    setActiveTab(e.value)
  }

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
                  onChange={(e) => handleChange(e, item)}
                />
            </li>)
        || ((!item.dropdown && item.component) &&
          <li className="nav-bar-item">{item.component}</li>)
      )}
    </ul>
  )
};

 export default NavBar;
