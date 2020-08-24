import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Tooltip from '@tippyjs/react';

import Button from 'components/button';
import Comments from 'components/data-detail/comments';

import './styles.scss';

const PopulationTooltip = ({ children }) => {
  return (
    <div className="c-population-tooltip">
      {children}
    </div>
  )
}

const PopulationTrend = ({ data }) => {

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
        <h2>Population trend</h2>
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
            <th>Trend</th>
            <th>Trend quality</th>
            <th>Notes</th>
            <th>References</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {(data).map(d =>
            <tr key={`${d.specie}${d.population}${d.publication}`}>
              <td>{d.publication}</td>
              <td>{d.startyear}</td>
              <td>{d.endyear}</td>
              <td>{d.name}</td>
              <td>{d.quality}</td>
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
              <td>
                {!!d.references && !!d.references.length && d.references.map(n => (
                  <Tooltip
                    key={`${d.specie}${d.population}${n.id}`}
                    delay={0}
                    arrow={false}
                    duration={[0, 0]}
                    content={<span>{n.info}</span>}
                  >
                    <span className="tooltipped">R{n.id}</span>
                  </Tooltip>
                ))}
              </td>
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

PopulationTrend.propTypes = {
}

export default PopulationTrend;
