import React from 'react';
import loadable from '@loadable/component';

// components

import Spinner from 'components/spinner';

const AsyncPage = loadable((props) => import(`pages/${props.page}`), {
  fallback: <Spinner />,
});

export default AsyncPage;
