import React from 'react';
import Hero from 'components/hero';

import pageInfo from './constants';

import './styles.scss';

const BackgroundPage = ({ current }) => (
  <div className="l-background">
    <Hero infoId='background' />
    {pageInfo[current] &&
      <div className='background-content'>
        <h3>{pageInfo[current].intro}</h3>
        <p>{pageInfo[current].description}</p>
      </div>}
  </div>);

export default BackgroundPage;
