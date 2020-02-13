import React from 'react';
import classnames from 'classnames';

import Link from 'redux-first-router-link';
import PropTypes from 'prop-types';

import './styles.scss';

const TabsMenu = ({ current, tabs, page }) =>
  <div className="c-menu-items">
    {tabs.map(tab =>
      <Link
        className={classnames('menu-item', { 'active': tab.id === current.id })}
        to={ { type: page,  payload : { id:`${tab.id}` }}}>
          {tab.name}
      </Link>)}
  </div>

TabsMenu.propTypes = {
  tabs: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired
};

export default TabsMenu;
