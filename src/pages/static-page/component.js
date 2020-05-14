import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/card';
import PagesInfo from 'pages/constants';

import './styles.scss';

const StaticPage = ({ currentTab, currentPage }) => {

  const page = PagesInfo[currentPage];
  const cardInfo = page.tabs ? page.info.find(tab => tab.id === currentTab.id) : page.info;
  return (
    <div className="l-static">
      <div>
        <h1>{page.title}</h1>
      </div>
      <Card info={cardInfo} tabs={page.tabs} page={currentPage} />
    </div>
  );
}

StaticPage.propTypes = {
  currentTab: PropTypes.shape({}).isRequired,
  currentPage: PropTypes.string.isRequired
};

export default StaticPage;
