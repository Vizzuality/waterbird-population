import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/card';
import PagesInfo from 'pages/constants';
import Image from 'static/waves.png';

import './styles.scss';

const StaticPage = ({ currentTab, currentPage }) => {
  const page = PagesInfo[currentPage];

  const info = page.tabs && page.tabsInfo
    ? page.tabsInfo.find(tab => tab.id === currentTab.id)
    : page

  return (
    <div className="l-static" style={{ backgroundImage: `url(${Image})` }}>
      <div>
        <h1>{page.title}</h1>
      </div>
      <Card
        info={info}
        tabs={page.tabs || null}
        page={currentPage} />
    </div>
  );
}

StaticPage.propTypes = {
  currentTab: PropTypes.shape({}).isRequired,
  currentPage: PropTypes.string.isRequired
};

export default StaticPage;
