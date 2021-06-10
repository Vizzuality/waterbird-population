import React from 'react';
import PagesInfo from 'pages/constants';
import TabsMenu from 'components/tabs-menu';

import './styles.scss';


const Hero = ({ infoId }) =>
  <div className="c-hero">
    <div className="hero-intro">
      <h1>{PagesInfo[infoId].title}</h1>
      <p>{PagesInfo[infoId].headerDescription || null}</p>
    </div>
    <div className="hero-menu">
      {PagesInfo[infoId].tabs
      ? <TabsMenu tabs={PagesInfo[infoId].tabs}/>
      : null}
    </div>
  </div>

export default Hero;
