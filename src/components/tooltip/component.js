import React from 'react';
import { Tooltip } from 'react-tippy';

import './styles.scss';

const ReactTooltip = (props) => {
  const { children, className, theme, ...domProps } = props;

  return (
    <Tooltip
      className={className}
      interactive={true}
      placement='bottom'
      trigger='click'
      {...domProps}
    >
      {children}
    </Tooltip>
  )
};

export default ReactTooltip;
