import React from 'react';

import NavMenu from 'components/nav-menu';
import Register from 'components/register';
import Image from './images/logo_EAD.png';

import './styles.scss';

const Footer = () =>
  <footer className="c-footer">
    <div className="wrapper">
      <section className="footer-header">
        <h2>Do you want to take part?</h2>
        <div className="footer-controls">
          <a
            href={`mailto:?to=post@wetlands.org`}
            target="_blank"
            rel="noopener noreferrer"
            className="c-button -border -medium -tertiary"
          >
            Contact us
          </a>
          <Register />
        </div>
      </section>
      <section className="footer-navigation">
        <NavMenu className='footer' />
      </section>
    </div>
    <aside>
      <a
        href="https://www.ead.gov.ae/en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Image} alt='Environment Agency – Abu Dhabi (EAD)' />
      </a>
      <p>Citation: Wetlands International (2020) “Waterbird Populations Portal”. Retrieved from wpp.wetlands.org on Friday 30 October 2020.</p>
    </aside>
  </footer>

export default Footer;
