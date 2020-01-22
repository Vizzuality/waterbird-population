import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import App from 'pages/app';
import Other from 'pages/other';
import NotFoundPage from 'pages/not_found';

const pageMap = new Map([
  ['PAGE/APP', App],
  ['PAGE/OTRA', Other],
]);

// prompts or error logging should be handled here
const Pages = ({ page: { current }, initializeApp }) => {
  const Page = pageMap.has(current) ? pageMap.get(current) : NotFoundPage;


  console.log(current)

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  return <Page page={current} />;
};

Pages.propTypes = {
  initializeApp: PropTypes.func.isRequired,
  page: PropTypes.shape({
    current: PropTypes.string.isRequired,
    payload: PropTypes.shape({}).isRequired
  }).isRequired
};

export default Pages;
