import React from 'react';

import Logo from 'images/logo.png';
import NavMenu from 'components/nav-menu';
import Login from 'components/login';

import './styles.scss';

const Header = () =>
  <div className="c-header">
    <img src={Logo} alt="Wetlands International" />
    <div className="header-navigation">
      <NavMenu className='header'/>
      <Login />
    </div>
  </div>

export default Header;
