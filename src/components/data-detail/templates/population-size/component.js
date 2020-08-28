import React, { useState } from 'react';
import classnames from 'classnames';

import Tooltip from '@tippyjs/react';

import Button from 'components/button';
import Comments from 'components/data-detail/comments';
import Note from 'components/note';

import './styles.scss';

const PopulationSize = ({ data }) => {

  const [isCollapsed, toggleCollapse] = useState(true);
  const [visible, toggleVisibility] = useState(false);
  const [isOpen, toggleComment] = useState(false);

  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };

  const handleClickComments = () => {
    toggleComment(!isOpen);
    toggleVisibility(!visible);
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
            <tr key={`${d.specie}${d.population}${d.publication_id}`}>
              <td>{d.publication}</td>
              <td>{d.startyear}</td>
              <td>{d.endyear}</td>
              <td>{d.minimum}</td>
              <td>{d.maximum}</td>
              <td>{d.quality}</td>
              <td>
                {!!d.notes && !!d.notes.length && d.notes.map(n => (
                  <Tooltip
                    key={`${d.specie}${d.population}${n.id}`}
                    delay={0}
                    arrow={false}
                    duration={[0, 0]}
                    render={() =>
                      <Note>
                        <p className="title">
                          Population size note <span>#{n.id}</span>
                        </p>
                        <p>{n.info}</p>
                      </Note>}
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
                    arrow={true}
                    duration={[0, 0]}
                    render={() => (
                      <Note>
                        <p className="title">
                          Population size note <span>#{n.id}</span>
                        </p>
                        <p>{n.info}</p>
                      </Note>)}
                  >
                    <span className="tooltipped">R{n.id}</span>
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
                      sizeId={d.size_id}
                      visible={visible}
                      onClose={handleClickComments}
                    />}
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

PopulationSize.propTypes = {
}

export default PopulationSize;
