import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';
import Menu from './menu.svg';

import { menuItems } from './constants';

import './styles.scss';

const NavMenu = ({ className, current, query }) => {

  const [active, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!active);
  }

  return (
    <div className="c-nav-menu-wrapper">
      <button
        aria-label={className}
        className={classnames(
          {
            'header': className === 'header',
            'footer': className === 'footer',
          })}
        onClick={handleClick}
        style={{ backgroundImage: `url(${Menu})` }} />
      <div className={classnames("nav-menu",
        {
          'header': className === 'header',
          'footer': className === 'footer',
          '-active': active,
        })}>

        {menuItems.map(
          item => (!item.dropdown && !item.component)
            ? <div key={item.name} className="nav-menu-item">
              <Link
                to={{ type: `${item.type}`, pathname: `${item.path}`, query: query }}
                onClick={handleClick}
              >
                <h3 className={classnames({ '-active': current === item.type })}>
                  {item.name}
                </h3>
              </Link></div>
            : (item.dropdown && !item.component && (
              <div key={item.name} className="nav-menu-item dropdown">
                <Link to={{
                  type: `${item.type}`,
                  pathname: `${item.path}`,
                  payload: { id: `${item.dropdown.options[0].id}` },
                  query: query
                }}
                  onClick={handleClick}
                >
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
                        payload: { id: `${opt.id}` },
                        query: query
                      }}
                        onClick={handleClick}
                      >
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
    </div>
  )
};

NavMenu.propTypes = {
  className: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  query: PropTypes.shape({})
};

NavMenu.propTypes = {
  query: {}
};

export default NavMenu;
