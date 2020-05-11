import React from 'react';

import Icon from 'components/icon';

import Links from './constants';
import './styles.scss';

const Section1 = () => (
  <section className="c-section1">
    <div className="container">
      <div className="row justify-content-start">
        <div className="col">
          <h1>Waterbird <br/> Population Estimates</h1>
        </div>
      </div>
      <div className="row justify-content-start">
        <div className="col-lg-7 col-md-8 col-sm-12">
          <p className="home-subtitle">Obtain information on the status of waterbird species, providing a comprehensive basis for management and decision-making.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h2>Data-driven Waterbird Population Estimates</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <p className="center">Direct access to:</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          <nav>
          <div className="row">
            <ul>
              <div className="row justify-content-start">
              {Links.map(({ label, href }) => (
                <div className="col-lg-3 col-md-6 col-sm-12">
                <li key={label}>
                  <a target="_blank" rel="noopener noreferrer" href={href}>
                    {label}
                    <Icon className="-huge" name="flecha_02" />
                  </a>
                </li>
                </div>
              ))}
              </div>
            </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          <p className="center bottom-text">The Waterbird Population Estimates (WPE) online database provides current and historic estimates, trends and 1% thresholds for over 800 waterbird species and 2300 biogeographic populations worldwide. This project has been developed by Wetlands International with the support of Environment Canada and the Ramsar Convention on Wetlands.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Section1;
