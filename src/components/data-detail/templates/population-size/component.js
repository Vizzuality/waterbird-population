import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from 'components/button';
import Tooltip from 'components/tooltip';
import Comments from 'components/data-detail/comments';

import './styles.scss';

const PopulationSize = ({ data }) => {

  const [isCollapsed, toggleCollapse] = useState(true);
  const [isOpen, toggleComment] = useState(false);


  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };

  const handleClickComments = () => {
    toggleComment(!isOpen)
  };


  return (
    <div className={classnames('c-population-size',
      { '-collapse': isCollapsed })}>
      <div className="header">
        <h2>Population size</h2>
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

      <table>
        <thead>
          <tr>
            <th>Publication</th>
            <th>Start year</th>
            <th>End year</th>
            <th>Minimum</th>
            <th>Maximum</th>
            <th>Estimate quality</th>
            <th>Notes</th>
            <th>References</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {(data).map(d =>
            <tr>
              <td>{d.publication}</td>
              <td>{d.startyear}</td>
              <td>{d.endyear}</td>
              <td>{d.minimum}</td>
              <td>{d.maximum}</td>
              <td>TO DO</td>
              <td>TO DO</td>
              <td>TO DO</td>
              {/* <td className="button">
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
              </td> */}
            </tr>
          )}
        </tbody>
      </table>
    </div >
  )
};

PopulationSize.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array
  }).isRequired
}

export default PopulationSize;
