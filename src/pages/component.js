


import React from 'react';
import PropTypes from 'prop-types';

// todo: add Universal component or loadable
import HomePage from 'pages/home';
import OtherPage from 'pages/other';
import NotFoundPage from 'pages/not_found';

const pageMap = new Map([
  ['PAGE/APP', HomePage],
  ['PAGE/OTHER', OtherPage]
]);

console.log()
// prompts or error logging should be handled here
const Pages = ({ router }) => {
  const pathName = router[0].pathname;
  const Page = pageMap.has(pathName) ? pageMap.get(pathName) : NotFoundPage;

  console.log(pathName)

  debugger

  return <Page page={pathName} />;
};

Pages.propTypes = {
  initializeApp: PropTypes.func.isRequired,
  page: PropTypes.shape({
    pathName: PropTypes.string.isRequired,
    payload: PropTypes.shape({}).isRequired
  }).isRequired
};

export default Pages;


