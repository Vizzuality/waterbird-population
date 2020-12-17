import React from 'react';

import StaticPage from 'pages/static-page';
import UrlComponent from 'components/url';

import { URL_PROPS } from './url';

const AnalyzePage = () => {
  return (
    <>
      <UrlComponent urlProps={URL_PROPS} />
      <StaticPage />
    </>
  );
};

export default AnalyzePage;
