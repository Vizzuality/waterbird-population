import React from 'react';

import NavMenu from 'components/nav-menu';
import SigInSigupContainer from 'components/user-signin';
import Image from 'static/images/logo_EAAD.jpg';

import './styles.scss';

const Footer = () => {
  const d = new Date();
  const date = d.toDateString();
  const year = d.getUTCFullYear();

  return (
    <footer className="c-footer">
      <div className="wrapper">
        <section className="footer-header">
          <h2>Do you want to take part?</h2>
          <div className="footer-controls">
            <a
              href={`mailto:?to=wpe@wetlands.org`}
              target="_blank"
              rel="noopener noreferrer"
              className="c-button -border -medium -tertiary"
            >
              Contact us
            </a>
            <SigInSigupContainer modalContent="sign-up" />
          </div>
        </section>
        <section className="footer-navigation">
          <NavMenu className="footer" />
        </section>
      </div>
      <aside>
        <a href="https://www.ead.gov.ae/en" target="_blank" rel="noopener noreferrer">
          <img src={Image} alt="Environment Agency – Abu Dhabi (EAD)" />
        </a>
        <p>
          Citation: Wetlands International ({year}) “Waterbird Populations Portal”. Retrieved from
          wpp.wetlands.org on {date}.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
