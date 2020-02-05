import React from 'react';
import headerInfo from 'pages/constants';
import './styles.scss';


const Header = ({infoId}) =>
  <div className="c-header">
    <h1>{headerInfo[infoId].title}</h1>
    <p>{headerInfo[infoId].description || null}</p>
  </div>

export default Header;
