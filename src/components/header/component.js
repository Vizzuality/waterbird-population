import React from 'react';
import PagesInfo from 'pages/constants';
import './styles.scss';
import TabsMenu from 'components/tabs-menu';


const Header = ({ infoId }) =>
  <div className="c-header">
    <h1>{PagesInfo[infoId].title}</h1>
    <p>{PagesInfo[infoId].headerDescription || null}</p>
    <div className="header-menu">
      {PagesInfo[infoId].tabs
      ? <TabsMenu tabs={PagesInfo[infoId].tabs}/>
      : null}
    </div>
  </div>

export default Header;
