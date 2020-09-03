import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Tooltip from '@tippyjs/react';

import Button from 'components/button';
import Comments from 'components/data-detail/comments';
import Note from 'components/note';

import './styles.scss';

const PopulationTrend = ({ data, user }) => {

  const [isCollapsed, toggleCollapse] = useState(true);
  const [visible, toggleVisibility] = useState({});

  const handleClick = () => {
    toggleCollapse(!isCollapsed);
  };

  const handleClickComments = (id) => {
    toggleVisibility({
      ...visible,
      [id]: !visible[id]
    });
  };


  return (
    <div className={classnames('c-population-trend',
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
            <Tooltip
              placement='top'
              onClickOutside={() => handleClickComments(`${d.trend_id} - ${d.publication_id}`)}
              visible={visible[`${d.trend_id} - ${d.publication_id}`]}
              render={() =>
                <Comments
                  title={'Population trend'}
                  populationId={d.population}
                  published={d.published}
                  publicationId={d.publication_id}
                  publicationName={d.publication}
                  trendId={d.trend_id}
                  visible={visible[`${d.trend_id} - ${d.publication_id}`]}
                  onClose={() => handleClickComments(`${d.trend_id} - ${d.publication_id}`)}
                />}
            >
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
                      content={(
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
                <td>
                  {!!d.references && !!d.references.length && d.references.map(n => (
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
                      <span className="tooltipped">R{n.id}</span>
                    </Tooltip>
                  ))}
                </td>
                {user && (
                  <td className="button">
                    <button
                      className={classnames('comments-button',
                        {
                          '-secondary': visible[`${d.trend_id} - ${d.publication_id}`],
                          '-primary': !visible[`${d.trend_id} - ${d.publication_id}`]
                        }
                      )}
                      onClick={() => handleClickComments(`${d.trend_id} - ${d.publication_id}`)}>

                      {visible[`${d.trend_id} - ${d.publication_id}`] ? 'Close' : 'Comments'}
                    </button>
                  </td>
                )}
              </tr>
            </Tooltip>
          )}
        </tbody>
      </table>
    </div >
  )
};

PopulationTrend.propTypes = {
  data: PropTypes.shape({}).isRequired,
  user: PropTypes.number.isRequired
}

export default PopulationTrend;
