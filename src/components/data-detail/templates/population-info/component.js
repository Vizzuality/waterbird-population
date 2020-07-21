import React, { useState, Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from 'components/button';
import Tooltip from 'components/tooltip';
import Comments from 'components/data-detail/comments';

import info from './constants';
import './styles.scss';

const PopulationInfo = ({ data }) => {
  data = [info]

  const [isCollapsed, toggleCollapse] = useState(true);
  const [isOpen, toggleComment] = useState(false);


  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };

  const handleClickComments = () => {
    toggleComment(!isOpen)
  };


  return (
    <div className={classnames('c-population-info',
      { '-collapse': isCollapsed })}>
      <div className="header">
        <h2>{info.title}</h2>
        <Button
          onClick={handleClick}
          className={classnames('-secondary -medium',
            {
              ['-background']: isCollapsed,
              ['-border']: !isCollapsed
            }
          )}
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </Button>
      </div>
      {data.map(info =>
        <table>
          {(info.data.map(i => {
            return (
              <tr>
                {i.map(i2 => (
                  <Fragment>
                    <th>{i2.head}</th>
                    <td>{i2.value}</td>
                  </Fragment>
                ))}
              </tr>
            );
          }))}
        </table>
      )}
    </div >
  )
};

PopulationInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array
  }).isRequired
}

export default PopulationInfo;
