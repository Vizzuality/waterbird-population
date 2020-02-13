import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';


const TabsMenu = ({ current, tabs, setActiveTab }) => {

  const setTab = (currentTab) => console.log(currentTab) || setActiveTab(currentTab);

  return <ul className="c-menu-items">
    {tabs.map(tab =>
      <li
        className={classnames('menu-item-header',
          { 'active': current === tab.id } )}
        tabIndex="0"
        role="button"
        onClick={() => setTab(tab.id)}
      >
      {tab.name}
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
