import React from 'react';

import Logo from 'images/logo.png';
import NavMenu from 'components/nav-menu';
import Login from 'components/login';

import './styles.scss';

const Header = () =>
  <div className="c-header">
    <a href="https://www.wetlands.org/">
      <img src={Logo} alt="Wetlands International" />
    </a>
    <div className="header-navigation">
      <NavMenu className='header'/>
      <Login />
    </div>
  </div>

export default Header;
