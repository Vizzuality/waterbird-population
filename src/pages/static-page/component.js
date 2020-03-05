import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/card';
import PagesInfo from 'pages/constants';

import './styles.scss';

const StaticPage = ({ currentTab, currentPage }) => {
  const page = PagesInfo[currentPage];
  const tabInfo = page.tabsInfo.find(tab => tab.id === currentTab.id)
  return (
    <div className="l-static">
      <div>
        <h1>{page.title}</h1>
      </div>

      <Card info={tabInfo} tabs={page.tabs} page={currentPage} />
    </div>
  );
}

StaticPage.propTypes = {
  currentTab: PropTypes.shape({}).isRequired,
  currentPage: PropTypes.string.isRequired
};

export default StaticPage;
