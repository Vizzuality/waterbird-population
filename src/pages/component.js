import React from 'react';
import PropTypes from 'prop-types';
import AsyncPage from 'pages/async';

const Pages = ({ router }) => {
  const { type, routesMap } = router;
  const { page } = routesMap[type];
  return (
    <>
      {Object.keys(routesMap).map(route => page === routesMap[route].page && <AsyncPage key={page} page={page} router={router} /> )}
    </>
  );
};

Pages.propTypes = {
  router: PropTypes.shape({
    type: PropTypes.string,
    routesMap: PropTypes.shape({})
  }).isRequired,

};

export default Pages;
