import React from 'react';
import Link from 'redux-first-router-link';
import Logo from 'images/logo.png';
import NavMenu from 'components/nav-menu';
import SigInSigupContainer from 'components/user-signin';

import './styles.scss';

const Header = () => (
  <div className="c-header">
    <div className="wrapper">
      <div className="row">
        <div className="col-xs-3">
          <Link to={{ type: 'HOME', pathname: '/' }}>
            <img src={Logo} alt="Wetlands International" />
          </Link>
        </div>
        <div className="col-xs-9">
          <div className="header-navigation">
            <NavMenu className="header" />
            <SigInSigupContainer modalContent="sign-in" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
