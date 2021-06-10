import React from 'react';
import loadable from '@loadable/component';

// components
import Spinner from 'components/spinner';

import './styles.scss';

const AsyncPage = loadable((props) => import(`pages/${props.page}`), {
  fallback: (
    <div className="l-async-page">
      <div className="l-wrapper">
        <Spinner />
      </div>
    </div>
  ),
});

export default AsyncPage;
