import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from 'components/button';
import Tooltip from '@tippyjs/react';
import Comments from 'components/data-detail/comments';
import Note from 'components/note';

import './styles.scss';

const PopulationPercent = ({ data, user, publication }) => {
  const [isCollapsed, toggleCollapse] = useState(publication ? true : false);
  const [visible, toggleVisibility] = useState({});

  const handleClick = () => {
    toggleCollapse(!isCollapsed);
  };

  const handleClickComments = (id) => {
    toggleVisibility({
      ...visible,
      [id]: !visible[id],
    });
  };

  return (
    <div className={classnames('c-population-percent', { '-collapse': isCollapsed })}>
      <div className="header">
        <h2>Population 1% level</h2>
        <Button
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
          onClick={handleClick}
          className={classnames('-secondary -medium .-noPrint', {
            '-background': isCollapsed,
            '-border': !isCollapsed,
          })}
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
          {data.map((d) => (
            <Tooltip
              placement="top"
              onClickOutside={() => handleClickComments(`${d.onepercent_id} - ${d.publication_id}`)}
              visible={visible[`${d.onepercent_id} - ${d.publication_id}`]}
              interactive={true}
              render={() => (
                <Comments
                  title={'Population 1% level'}
                  populationId={d.population}
                  published={d.published}
                  publicationId={d.publication_id}
                  publicationName={d.publication}
                  onepercentId={d.onepercent_id}
                  visible={visible[`${d.onepercent_id} - ${d.publication_id}`]}
                  onClose={() => handleClickComments(`${d.onepercent_id} - ${d.publication_id}`)}
                />
              )}
            >
              <tr
                key={d.publication}
                className={classnames({
                  '-active': visible[`${d.onepercent_id} - ${d.publication_id}`],
                })}
              >
                <td>
                  <span className="cell-content">{d.publication}</span>
                </td>
                <td>
                  <span className="cell-content">{d.yearset}</span>
                </td>
                <td>
                  <span className="cell-content">{d.onepercent}</span>
                </td>
                <td>
                  <span className="cell-content">
                    {!!d.notes &&
                      !!d.notes.length &&
                      d.notes.map((n) => (
                        <Tooltip
                          key={`${d.specie}${d.population}${n.id}`}
                          interactive={true}
                          arrow={false}
                          duration={[0, 0]}
                          content={
                            <Note>
                              <p className="title">
                                Population trend note <span>#{n.id}</span>
                              </p>
                              <p>{!!n.info && n.info}</p>
                            </Note>
                          }
                        >
                          <a href={`trend-note-${n.id}`}>
                            <span className="tooltipped">N{n.id}</span>
                          </a>
                        </Tooltip>
                      ))}
                  </span>
                </td>
                <td className="button">
                  <span className="cell-content">
                    {user.id && (
                      <button
                        aria-label="show-references"
                        className={classnames('comments-button', {
                          '-secondary': visible[d.onepercent_id],
                          '-primary': !visible[d.onepercent_id],
                        })}
                        onClick={() =>
                          handleClickComments(`${d.onepercent_id} - ${d.publication_id}`)
                        }
                      >
                        {visible[`${d.onepercent_id} - ${d.publication_id}`] ? 'Close' : 'Comments'}
                      </button>
                    )}
                  </span>
                </td>
              </tr>
            </Tooltip>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PopulationPercent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  user: PropTypes.number,
  publication: PropTypes.number.isRequired,
};

PopulationPercent.defaultProps = {
  user: null,
  publication: PropTypes.number.isRequired,
};

export default PopulationPercent;
