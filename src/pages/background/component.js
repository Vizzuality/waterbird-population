import React from 'react';
import Card from 'components/card';
import PagesInfo from 'pages/constants';
import './styles.scss';

const BackgroundPage = ({ currentTab, currentPage }) => {
  const page = PagesInfo[currentPage];
  const tabInfo = page.tabsInfo.find(tab => tab.id === currentTab)
  return (
    <div className="l-background">
      <h1>{page.title}</h1>
      <Card info={tabInfo} tabs={page.tabs} />
    </div>
  );
}

export default BackgroundPage;
