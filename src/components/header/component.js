import React from 'react';
import Link from 'redux-first-router-link';
import Logo from 'images/logo.png';
import NavMenu from 'components/nav-menu';
import SigInSigupContainer from 'components/user-signin';
import Image from 'static/images/logo_EAAD.jpg';

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
            <a href="https://www.ead.gov.ae/en" target="_blank" rel="noopener noreferrer">
              <img src={Image} alt="Environment Agency – Abu Dhabi (EAD)" className="logo-small" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
