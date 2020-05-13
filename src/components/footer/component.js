import React from 'react';
import Link from 'redux-first-router-link';

import NavMenu from 'components/nav-menu'

import './styles.scss';

const Footer = () =>
  <footer className="c-footer">
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
          <Link className="c-button -background -medium -primary" to={ { type: "REGISTER", payload: { pathname: "register" } }}>Join us</Link>
      </div>
    </section>
    <section className="footer-navigation">
      <NavMenu className='footer' />
    </section>
  </footer>

export default Footer;
