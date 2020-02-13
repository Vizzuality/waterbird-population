import React from 'react';
import PagesInfo from 'pages/constants';
import Card from 'components/card';

import './styles.scss';

const DataPresentationPage = ({ currentTab, currentPage }) => {
  const page = PagesInfo[currentPage];
  const tabInfo = page.tabsInfo.find(tab => tab.id === currentTab)
  return (
    <div className="l-data">
      <h1>{page.title}</h1>
      <Card info={tabInfo} tabs={page.tabs} />
    </div>
  );
}

export default DataPresentationPage;
