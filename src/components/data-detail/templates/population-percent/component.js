import React, { useState } from 'react';
import classnames from 'classnames';

import Button from 'components/button';
import Tooltip from '@tippyjs/react';
import Comments from 'components/data-detail/comments';
import Note from 'components/note';

import './styles.scss';

const PopulationPercent = ({ data }) => {

  const [isCollapsed, toggleCollapse] = useState(true);
  const [visible, toggleVisibility] = useState(false);
  const [isOpen, toggleComment] = useState(false);


  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };

  const handleClickComments = () => {
    toggleComment(!isOpen)
    toggleVisibility(!visible);
  };


  return (
    <div className={classnames('c-population-percent',
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
                    render={() => (
                      <Note>
                        <p className="title">
                          Population trend note <span>#{n.id}</span>
                        </p>
                        <p>{n.info}</p>
                      </Note>)}
                  >
                    <span className="tooltipped">N{n.id}</span>
                  </Tooltip>
                ))}
              </td>
              <td className="button">
                <Tooltip
                  trigger="click"
                  render={() =>
                  <Comments
                    populationId={d.population}
                    publicationId={d.publication_id}
                    onepercentId={d.onepercent_id}
                    visible={visible}
                    onClose={handleClickComments}/>}
                >
                  <button
                    className={classnames('comments-button',
                      {
                        '-secondary': isOpen,
                        '-primary': !isOpen
                      }
                    )}
                    onClick={handleClickComments}>

                    {isOpen ? 'Close' : 'Comments'}
                  </button>
                </Tooltip>
              </td>
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
