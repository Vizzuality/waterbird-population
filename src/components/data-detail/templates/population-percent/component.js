import React, { useState } from 'react';
import classnames from 'classnames';

import Button from 'components/button';
import Tooltip from '@tippyjs/react';
import Comments from 'components/data-detail/comments';
import Note from 'components/note';

import './styles.scss';

const PopulationPercent = ({ data }) => {

  const [isCollapsed, toggleCollapse] = useState(true);
  const [visible, toggleVisibility] = useState({});
  const [isOpen, toggleComment] = useState(false);


  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };

  const handleClickComments = (id) => {
    toggleComment(!isOpen)
    toggleVisibility({
      ...visible,
      [id]: !visible[id]
    });
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

            <Tooltip
              placement='top'
              visible={visible[`${d.onepercent_id} - ${d.publication_id}`]}
              render={() =>
              <Comments
                populationId={d.population}
                publicationId={d.publication_id}
                onepercentId={d.onepercent_id}
                visible={visible[`${d.onepercent_id}`]}
                onClose={() => handleClickComments(`${d.onepercent_id}`)}
              />}
            >
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


                  <button
                    className={classnames('comments-button',
                      {
                        '-secondary': isOpen,
                        '-primary': !isOpen
                      }
                    )}
                    onClick={() => handleClickComments(d.onepercent_id)}>

                    {isOpen ? 'Close' : 'Comments'}
                  </button>
                </td>

              </tr>
            </Tooltip>
          )}
        </tbody>
      </table>
    </div >
  )
};

PopulationPercent.propTypes = {
}

export default PopulationPercent;
