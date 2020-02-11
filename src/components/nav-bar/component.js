import React from 'react';
import Link from 'redux-first-router-link';

import { menuItems } from './constants';

import './styles.scss';

const NavBar = () => {
  return (
    <div className="c-nav-bar">
      {menuItems.map(
        item => (!item.dropdown && !item.component)
          ? <div className="nav-bar-item"><Link to={item.path}>{item.name}</Link></div>
          : (item.dropdown && !item.component && (
            <ul>
              <h3>{item.name}</h3>
              {item.dropdown.options.map(opt =>
                <li>
                  <Link to={`${item.path}/${opt.id}`}>
                    {opt.name}
                  </Link>
                </li>)}
            </ul>
          )) || ((!item.dropdown && item.component) &&
            <div className="nav-bar-item">{item.component}</div>)
      )}
    </div>
  )
};

export default NavBar;
