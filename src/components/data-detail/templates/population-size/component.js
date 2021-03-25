import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Tooltip from '@tippyjs/react';

import Button from 'components/button';
import Comments from 'components/data-detail/comments';
import Note from 'components/note';

import './styles.scss';

const PopulationSize = ({ data, user, publication }) => {
  const [isCollapsed, toggleCollapse] = useState(publication ? true : false);
  const [visible, toggleVisibility] = useState({});
  const handleClick = () => {
    toggleCollapse(!isCollapsed)
  };

  const handleClickComments = (id) => {
    toggleVisibility({
      ...visible,
      [id]: !visible[id]
    });
  };

  return (
    <div className={classnames('c-population-size',
      { '-collapse': isCollapsed })}>
      <div className="header">
        <h2>Population size</h2>
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
            <Tooltip
              placement='top'
              trigger="click"
              onClickOutside={() => handleClickComments(`${d.size_id} - ${d.publication_id}`)}
              visible={visible[`${d.size_id} - ${d.publication_id}`]}
              arrow={true}
              interactive={true}
              render={() =>
                <Comments
                  title={'Population size'}
                  populationId={d.population}
                  published={d.published}
                  publicationId={d.publication_id}
                  publicationName={d.publication}
                  sizeId={d.size_id}
                  visible={visible[`${d.size_id} - ${d.publication_id}`]}
                  onClose={() => handleClickComments(`${d.size_id} - ${d.publication_id}`)}
              />}
            >
              <tr
                key={`${d.specie}${d.population}${d.publication_id}`}
                className={classnames({ '-active': visible[`${d.size_id} - ${d.publication_id}`] })}
              >
                <td><span className="cell-content">{d.publication}</span></td>
                <td><span className="cell-content">{d.startyear}</span></td>
                <td><span className="cell-content">{d.endyear}</span></td>
                <td><span className="cell-content">{d.minimum}</span></td>
                <td><span className="cell-content">{d.maximum}</span></td>
                <td><span className="cell-content">{d.quality}</span></td>
                <td><span className="cell-content">
                  {!!d.notes && !!d.notes.length && d.notes.map((n, i) => (
                    <Tooltip
                      delay={0}
                      interactive={true}
                      arrow={false}
                      duration={[0, 0]}
                      content={
                        <Note>
                          <p className="title">
                            Population size note <span>#{n.id}</span>
                          </p>
                          <p>{!!n.info && n.info}</p>
                        </Note>}
                    >
                      {n.id && n.info && (<span className="tooltipped">
                        {i === d.notes.length - 1 ? `N${n.id}` : `N${n.id}, `}
                      </span>)}
                    </Tooltip>
                  ))}
                </span></td>
                <td>
                  <span className="cell-content">
                    {!!d.references && !!d.references.length && d.references.map((n, i) => (
                      <Tooltip
                        key={`${d.specie}${d.population}${n.id}`}
                        delay={0}
                        interactive={true}
                        arrow={true}
                        duration={[0, 0]}
                        content={
                          <Note>
                            <p className="title">
                              Population size reference <span>#{n.id}</span>
                            </p>
                            <p>{n.info}</p>
                          </Note>}
                      >
                        {n.id && n.info && (<span className="tooltipped">
                          {i === d.references.length - 1 ? `R${n.id}` : `R${n.id}, `}
                        </span>)}
                      </Tooltip>
                    ))}
                  </span></td>
                {user.id && (
                  <td className="button">
                    <span className="cell-content">
                      <button
                        aria-label="show-comments"
                        className={classnames('comments-button',
                          {
                            '-secondary': visible[`${d.size_id} - ${d.publication_id}`],
                            '-primary': !visible[`${d.size_id} - ${d.publication_id}`]
                          }
                        )}
                        onClick={() => handleClickComments(`${d.size_id} - ${d.publication_id}`)}>

                        {visible[`${d.size_id} - ${d.publication_id}`] ? 'Close' : 'Comments'}
                      </button>
                    </span>
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

PopulationSize.propTypes = {
  data: PropTypes.shape({}).isRequired,
  user: PropTypes.number
};

PopulationSize.defaultProps = {
  user: null
};

export default PopulationSize;
