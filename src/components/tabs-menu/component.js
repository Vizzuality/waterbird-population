import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const TabsMenu = ({ tabs, setActiveTab }) => {

  const setTab = (currentTab) => setActiveTab(currentTab);

  return <ul className="c-menu-items">
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

TabsMenu.propTypes = {
  tabs: PropTypes.array.isRequired,
  setActiveTab: PropTypes.func.isRequired
};

export default TabsMenu;
