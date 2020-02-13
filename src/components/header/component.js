import React from 'react';

//import Logo from 'images/logo';
import NavMenu from 'components/nav-menu';
import Login from 'components/login';

import './styles.scss';

const Header = () =>
  <div className="c-header">
    {/* <img src={logo} alt="Wetlands International Logo" /> */}
    <div className="header-navigation">
      <NavMenu className='header'/>
      <Login />
    </div>
  </div>

export default Header;
