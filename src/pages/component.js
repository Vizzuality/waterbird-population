import React from 'react';
import PropTypes from 'prop-types';
import AsyncPage from 'pages/async';

const Pages = ({ router: { type, routesMap } }) => {
  const { page } = routesMap[type];

  return <AsyncPage page={page} />;
};

Pages.propTypes = {
  router: PropTypes.shape({
    type: PropTypes.string,
    routesMap: PropTypes.shape({})
  }).isRequired,

};

export default Pages;
