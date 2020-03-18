import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from 'components/button';
import Tooltip from 'components/tooltip';

import info from './constants';
import './styles.scss';

const PopulationTrend = ({ data }) => {
  data = [info]

  const [isCollapsed, toggleCollapse] = useState(true);
  const [isOpen, toggleComment] = useState(false);
  const [isDisable, disableButton] = useState(true);

  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };

  const handleClickComments = () => {
    toggleComment(!isOpen)
  };

  const handleChange = (e) => {
    e.target.value.length > 0 ? disableButton(false) : disableButton(true)
  };
{console.log(isDisable)}

  return (
    <div className="c-population-trend">
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
                  html={<div>
                    <h3>Xabi Vega<span>3 days ago</span></h3>
                    <div className="comments-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Start year: 2006.  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                      <form method="post">
                        <textarea
                          name="Write your message"
                          placeholder="Write your message"
                          onChange={handleChange}
                          rows="4" />
                        <div className="tooltip-controls">
                          <Button
                            onClick={handleClickComments}
                            disable={isDisable}
                            className="-background -tertiary"
                          >
                            Cancel
                          </Button>

                          <input
                            type="submit"
                            value="Add comment"
                            className={classnames({ ['-disable']: isDisable })} />
                        </div>
                      </form>
                    </div>
                  </div>}
                >
                  <Button
                    onClick={handleClickComments}
                    className={classnames('-border -small',
                      {
                        ['-secondary']: isOpen,
                        ['-primary']: !isOpen
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
      )
      }
    </div>
  )
};

PopulationTrend.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array
  }).isRequired
}

export default PopulationTrend;
