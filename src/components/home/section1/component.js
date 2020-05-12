import React, { useState } from 'react';
import Icon from 'components/icon';
import Image from '../images/section1.png';

import Links from './constants';
import './styles.scss';

const Section1 = () => {

  const [hoverActive, toggleHover] = useState(false);

  const handleOver = () => {
    toggleHover(!hoverActive)
  };

  return (
    <section className="c-section1">
      <div className="wrapper">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <h1>Waterbird <br /> Population Estimates</h1>
          </div>
          <div className="col-md-5 col-sm-12">
            <img src={Image} alt="Wetlands International" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-8 col-sm-12">
            <p className="home-subtitle">Obtain information on the status of waterbird species, providing a comprehensive basis for management and decision-making.</p>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-md-6 col-sm-12">
            <h2>Data-driven Waterbird Population Estimates</h2>
            <p className="center">Direct access to:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <nav>
              <div className="row">
                <ul>
                  <div className="row start-lg center-xs equal-height ">
                    {Links.map(({ label, href }) => (
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xsm-12 center-xs">
                        <li key={label}  onMouseEnter={handleOver} onMouseLeave={handleOver} >
                          <a target="_blank" rel="noopener noreferrer" href={href}>
                            {label}
                            <Icon className="-huge" name={!hoverActive ? "flecha_01" : "flecha_02"} />
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
        <div className="row center-xs">
          <div className="col-md-10 col-sm-12">
            <p className="center bottom-text">The Waterbird Population Estimates (WPE) online database provides current and historic estimates, trends and 1% thresholds for over 800 waterbird species and 2300 biogeographic populations worldwide. This project has been developed by Wetlands International with the support of Environment Canada and the Ramsar Convention on Wetlands.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
