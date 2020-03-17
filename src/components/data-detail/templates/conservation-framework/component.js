import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from 'components/button';

import info from './constants';
import './styles.scss';

const ConservationFramework = () => {

  const [isCollapsed, toggleCollapse] = useState(true);

  const handleClick = () =>{
    toggleCollapse(!isCollapsed)
  }

  return (
    <div className="c-conservation-framework">
      <div className="header">
        <h2>{info.title}</h2>
        <Button
          onClick={handleClick}
          className={classnames(
            { ['-secondary']: isCollapsed,
              ['-collapse']: !isCollapsed
            }
          )}>
          {isCollapsed ? 'Expand': 'Collapse'}
        </Button>
      </div>
      <span>{info.title}</span>
      <ul className={classnames({ ['collapse']: !isCollapsed })}>
        {info.data.map(data =>
          <li>{data}</li>)}
      </ul>
    </div>
  )
}

ConservationFramework.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array
  }).isRequired
}

export default ConservationFramework;
