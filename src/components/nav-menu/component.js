import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

import { menuItems } from './constants';

import './styles.scss';

const NavMenu = ({ className, current }) => {
  return (
    <div className={classnames("c-nav-menu",
      {
        'header': className === 'header',
        'footer': className === 'footer',
      })}>
      {menuItems.map(
        item => (!item.dropdown && !item.component)
          ? <div key={item.name} className="nav-menu-item">
            <Link to={{ type: `${item.type}`, pathname: `${item.path}` }}>
              <h3 className={classnames({ '-active': current === item.type })}>
                {item.name}
              </h3>
            </Link></div>
          : (item.dropdown && !item.component && (
            <div key={item.name} className="nav-menu-item dropdown">
              <Link to={{
                type: `${item.type}`,
                pathname: `${item.path}`,
                payload: { id: `${item.dropdown.options[0].id}` }
              }}>
                <h3 className={classnames({ '-active': item.type.includes(current) })}>
                  {item.name}
                </h3>
              </Link>
              <ul className="dropdown-list">
                {item.dropdown.options.map(opt =>
                  <li key={opt.id}>
                    <Link to={{
                      type: `${item.type}`,
                      pathname: `${item.path}`,
                      payload: { id: `${opt.id}` }
                    }}>
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

NavMenu.propTypes = {
  className: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired
};

export default NavMenu;
