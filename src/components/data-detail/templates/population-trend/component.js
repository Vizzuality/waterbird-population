import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from 'components/button';
import Tooltip from 'components/tooltip';
import Comments from 'components/data-detail/comments';

import info from './constants';
import './styles.scss';

const PopulationTrend = ({ data }) => {
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
    <div className={classnames('c-population-trend',
      { '-collapse': isCollapsed })}>
      <div className="header">
        <h2>{info.title}</h2>
        <Button
          onClick={handleClick}
          className={classnames('-secondary -medium',
            {
              '-background': isCollapsed,
              '-border': !isCollapsed
            }
          )}
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </Button>
      </div>
      {data.map(info =>
        <table>
          <thead>
            <tr>
              {(info.data.heads).map(head => <th>{head}</th>)}
              <div></div>
            </tr>
          </thead>
          <tbody>
            <tr>
              {(info.data.data1).map(i => <td>{i}</td>)}
              <td className="button">
                <Tooltip
                  trigger="click"
                  useContext
                  html={
                    <Comments
                      toggleComment
                      isOpen
                    //   info TO-DO- add dinamycally
                    />
                  }
                >
                  <Button
                    onClick={handleClickComments}
                    className={classnames('-border -small',
                      {
                        '-secondary': isOpen,
                        '-primary': !isOpen
                      }
                    )}
                  >
                    {isOpen ? 'Close' : 'Comments'}
                  </Button>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div >
  )
};

PopulationTrend.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array
  }).isRequired
}

export default PopulationTrend;
