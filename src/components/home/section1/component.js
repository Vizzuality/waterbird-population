import React, { useEffect, useState } from 'react';
import Link from 'redux-first-router-link';
import Image from '../images/section1.png';

import { fetchConservationFrameworks } from 'services/conservation';

import './styles.scss';

const Section1 = ({ setFilters, filters }) => {

  const [filterIds, setLinks] = useState('');

  useEffect(() => {
    fetchConservationFrameworks().then(data => setLinks(data));
  });

  const handleClick = (value) => {
    setFilters({
      ...filters,
      'framework_id': value
    });
  };

  const label = (e) => {
    const renamedLabels = [
      { value: 'CAF Action Plan', label: 'CMS/CAF' },
      { value: 'EAAFP Partnership', label: 'EAAFP' },
      { value: 'EUBD', label: 'EU BIRDS DIRECTIVE' },
    ];

    return renamedLabels.reduce((acc, word) => {
      return acc.includes(word.value) ? acc.replace(word.value, word.label) : acc;
    }, e);
  }

  return (
    <section className="c-section1">
      <div className="col-md-5 col-sm-12">
        <img src={Image} alt="Wetlands International" />
      </div>
      <div className="wrapper">
        <div className="row start-xs">
          <div className="col-md-7 col-sm-12">
            <h1>Waterbirds <br /> Populations Portal.</h1>
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
              <ul className="row start-lg center-xs equal-height" >
                {filterIds && filterIds.length && filterIds.map(({ id, code }) => (
                  <li className="col-lg-4 col-md-4 col-sm-6 col-xsm-12 center-xs" key={code}>
                    <div>
                      <Link
                        to={{ type: "EXPLORE", payload: { pathname: "explore" } }}
                        onClick={() => handleClick(id)}
                      >{label(code)}
                      </Link>
                    </div>
                  </li>
                ))}
                <li className="col-lg-4 col-md-4 col-sm-6 col-xsm-12 center-xs" key='ramsar'>
                  <div>
                    <Link
                      to={{ type: "EXPLORE", payload: { pathname: "explore" } }}
                      onClick={() => handleClick([1, 2, 3, 4, 5])}
                    >Ramsar
                    </Link>
                  </div>
                </li>
              </ul>
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
