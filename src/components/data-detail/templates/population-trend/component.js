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
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
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
          {user.id && (data).map(d =>
            <Tooltip
              placement='top'
              onClickOutside={() => handleClickComments(`${d.trend_id} - ${d.publication_id}`)}
              visible={visible[`${d.trend_id} - ${d.publication_id}`]}
              interactive={true}
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
              <tr
                key={`${d.specie}${d.population}${d.publication}`}
                className={classnames({
                  '-active': visible[`${d.trend_id} - ${d.publication_id}`]
                })} >
                <td><span className="cell-content">{d.publication}</span></td>
                <td><span className="cell-content">{d.startyear}</span></td>
                <td><span className="cell-content">{d.endyear}</span></td>
                <td><span className="cell-content">{d.name}</span></td>
                <td><span className="cell-content">{d.quality}</span></td>
                <td><span className="cell-content">
                  {!!d.notes && !!d.notes.length && d.notes.map((n, i) => (
                    <Tooltip
                      key={`${d.specie}${d.population}${n.id}`}
                      interactive={true}
                      delay={0}
                      arrow={false}
                      duration={[0, 0]}
                      content={(
                        <Note>
                          <p className="title">
                            Population trend note <span>#{n.id}</span>
                          </p>
                          <p>{!!n.info && n.info}</p>
                        </Note>)}
                    >
                      <span className="tooltipped">
                        {i === d.notes.length - 1 ? `N${n.id}` : `N${n.id}, `}
                      </span>
                    </Tooltip>
                  ))}
                </span>
                </td>
                <td><span className="cell-content">
                  {!!d.references && !!d.references.length && d.references.map((n, i) => (
                    <Tooltip
                      key={`${d.specie}${d.population}${n.id}`}
                      interactive={true}
                      delay={0}
                      arrow={false}
                      duration={[0, 0]}
                      content={(
                        <Note>
                          <p className="title">
                            Population trend reference <span>#{n.id}</span>
                          </p>
                          <p>{n.info}</p>
                        </Note>)}
                    >
                      {n.info &&
                        <span className="tooltipped">
                          {i === d.references.length - 1 ? `R${n.id}` : `R${n.id}, `}
                        </span>}
                    </Tooltip>
                  ))}
                </span>
                </td>
                {user.id && (
                  <td className="button">
                    <button
                      aria-label="show-comments"
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
  user: PropTypes.number
};

PopulationTrend.defaultProps = {
  user: null
};


export default PopulationTrend;
