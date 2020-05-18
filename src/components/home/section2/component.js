import React from 'react';

import Image from '../images/section2.png';

import Text from './constants';
import './styles.scss';

const Section2 = () => {
  const length = Text.length;
  return (
    <section className="c-section2">
      <div className="wrapper">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <img src={Image} alt="Wetlands International" />
          </div>
          <div className="col-md-7 col-sm-12">
            <div className="wrapper">
              <div className="row">
                <div className="col-sm-12">
                  <h2>What can I use this tool for?</h2>
                </div>
              </div>
              <div className="row">
                <ul>
                  {Text.map(({ id, description }) => (
                    <div className={`col-sm-${
                      id === length && length % 2 ? 12 : 6}`}>
                      <li key={id}>
                        <span>0{id}</span><p>{description}</p>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
