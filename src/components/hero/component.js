import React from 'react';
import PagesInfo from 'pages/constants';
import TabsMenu from 'components/tabs-menu';

import './styles.scss';


const Hero = ({ infoId }) =>
  <div className="c-hero">
    <h1>{PagesInfo[infoId].title}</h1>
    <p>{PagesInfo[infoId].headerDescription || null}</p>
    <div className="header-menu">
      {PagesInfo[infoId].tabs
      ? <TabsMenu tabs={PagesInfo[infoId].tabs}/>
      : null}
    </div>
  </div>

export default Hero;
