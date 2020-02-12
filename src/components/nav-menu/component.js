import React from 'react';
import Link from 'redux-first-router-link';

import { menuItems } from './constants';

import './styles.scss';

const NavMenu = () => {

  return (
    <div className="c-nav-menu">
      {menuItems.map(
        item => (!item.dropdown && !item.component)
          ? <div className="nav-menu-item"><Link to={item.path}>{item.name}</Link></div>
          : (item.dropdown && !item.component && (
            <div className="nav-menu-item dropdown">
              <h3>{item.name}</h3>
              <ul className="dropdown-list">
                {item.dropdown.options.map(opt =>
                  <li>
                    <Link to={`${item.path}/${opt.id}`}>
                      {opt.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )
        ))
      }
    </div>
  )
};

export default NavMenu;
