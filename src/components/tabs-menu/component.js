import React from 'react';
import PagesInfo from 'pages/constants';
import './styles.scss';


const TabsMenu = ({ tabs, setActiveTab }) => {
  const setTab = (currentTab) => setActiveTab(currentTab)
  return <ul className="c-menu-item">
    {tabs.map(tab =>
      <li
        className="menu-item-header"
        tabIndex="0"
        role="button"
        onClick={() => setTab(tab)}
      >
      {tab}
      </li>
      )
    }
  </ul>
};

export default TabsMenu;
