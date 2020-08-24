import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import './styles.scss';

const ReactTooltip = (props) => {
  const { children, ...rest } = props;

  return (
    <Tippy
      {...rest}
    >
      {children}
    </Tippy>
  )
};

export default ReactTooltip;
