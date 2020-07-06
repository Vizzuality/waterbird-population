import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from 'redux-first-router-link';

import './styles.scss';

const TabsMenu = ({ current, tabs, page }) =>
  <div className={classnames('c-menu-items', {
    '-tabs': tabs
  })}>
    {tabs && tabs.map(tab =>
      <Link
        key={tab.id}
        className={classnames('menu-item', { 'active': tab.id === current.id })}
        to={ { type: page,  payload : { id:`${tab.id}` }}}>
          {tab.name}
      </Link>)}
  </div>

TabsMenu.propTypes = {
  tabs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]).isRequired,
  page: PropTypes.string.isRequired,
  current: PropTypes.shape({}).isRequired
};

export default TabsMenu;
