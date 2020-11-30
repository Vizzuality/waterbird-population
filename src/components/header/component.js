import React from 'react';
import Link from 'redux-first-router-link';
import Logo from 'images/logo.png';
import NavMenu from 'components/nav-menu';
import Login from 'components/login';

import './styles.scss';

const Header = () => (
  <div className="c-header">
    <div className="wrapper">
      <div className="row">
        <div className="col-sm-3">
          <Link to={{ type: "HOME", pathname: "/" }}>
            <img src={Logo} alt="Wetlands International" />
          </Link>
        </div>
        <div className="col-sm-9">
          <div className="header-navigation">
            <NavMenu className='header' />
            <Login />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
