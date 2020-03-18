
import React, { useState } from 'react';
import classnames from 'classnames';

import Button from 'components/button';


const HeaderTemplates = ({ title }) => {

  const [isCollapsed, toggleCollapse] = useState(true);

  const handleClick = () =>{
    toggleCollapse(!isCollapsed)
  }
  return <div className="header">
    <h2>{title}</h2>
    <Button
      onClick={handleClick}
      className={classnames(
        {
          ['-secondary']: isCollapsed,
          ['-collapse']: !isCollapsed
        }
      )}>
      {isCollapsed ? 'Expand' : 'Collapse'}
    </Button>
  </div>
}

export default HeaderTemplates;
