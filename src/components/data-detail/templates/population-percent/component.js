import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from 'components/button';
import Tooltip from 'components/tooltip';
import Comments from 'components/data-detail/comments';

import './styles.scss';

const PopulationPercent = ({ data }) => {

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
        <h2>Population 1% level</h2>
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
            <th>Yearset</th>
            <th>1 percent</th>
            <th>Notes</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {(data).map(d =>
            <tr key={d.publication}>
              <td>{d.publication}</td>
              <td>{d.yearset}</td>
              <td>{d.onepercent}</td>
              <td>
                {!!d.notes && !!d.notes.length && d.notes.map(n => (
                  <Tooltip
                    key={`${d.specie}${d.population}${n.id}`}
                    delay={0}
                    arrow={false}
                    duration={[0, 0]}
                    content={<span>{n.info}</span>}
                  >
                    <span className="tooltipped">N{n.id}</span>
                  </Tooltip>
                ))}
              </td>
              {/* <td className="button">
                <Tooltip
                  className="-speech-ballon"
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

PopulationPercent.propTypes = {
}

export default PopulationPercent;
