import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import classnames from 'classnames';
import kebabCase from 'lodash/kebabCase';

// components
import Icon from 'components/icon';
import Tooltip from '@tippyjs/react';
import Note from 'components/note';

import Download from 'components/download';

import './styles.scss';

const PopulationsList = ({ specieId, populationData, query }) => {
  if (!populationData || !populationData.length) return null;
  return (
    populationData.map(
      d => {
        return (
          <section
            key={d.id}
            className={classnames('c-card-info', {
              '-empty': !d.publication_id,
              '-disabled': d.active === 1, // carto csntool database -> 0 = active
            })}
          >
            <Link
              to={{
                type: 'EXPLORE_DETAIL',
                pathname: '/explore',
                payload: { specie_id: specieId, population_id: d.populationId },
                query: query
              }}
              onClick={!d.publication_id ? (e) => e.preventDefault() : false}
              on
            >
              <div className="card-header">
                <div className="card-title">
                  <div className="title">
                  {/* carto csntool database 0 = active */}
                    <h4>Population {d.active === 1 && <span>(INACTIVE)</span>}</h4>
                  </div>
                  <h4 className="subtitle">{d.name}</h4>
                </div>

                {d.publication_id && (
                  <div className="card-buttons">
                    <button aria-label="more-info" type="button">
                      <p>More info</p>
                      <Icon name="info" />
                    </button>
                    <Download
                      text={'Download data'}
                      type="populations-card"

                      filename={`population-${kebabCase(d.name)}`}
                      dataSpecs={{
                        populationId: d.populationId,
                        publicationId: d.publication_id,
                      }}
                      imageSize="-small"
                    />
                  </div>
                )}
              </div>
              <div className="wrapper">
                <div className="row">
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Size</span>
                      <span className="card-data_result">
                        <strong>{d.size}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-2 border-right">
                    <div className="card-data">
                      <span>Size estimate quality</span>
                      <span className="card-data_result">
                        <strong>{d.size_estimates_quality}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Trend</span>
                      <span className="card-data_result">
                        <strong>{d.trend}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-2 border-right">
                    <div className="card-data">
                      <span className="card-data_title">Trend quality</span>
                      <span className="card-data_result">
                        <strong>{d.trend_quality}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>1% Threshold</span>
                      <span className="card-data_result">
                        <strong>{d.percent}</strong>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Notes</span>
                      <div className="notes">
                        {d.notes &&
                          d.notes.length &&
                          d.notes.map((n, i) => (
                            <Tooltip
                              key={`${d.id}${d.populationId}${n.id}`}
                              delay={0}
                              arrow={false}
                              duration={[0, 0]}
                              content={
                                <Note>
                                  <p className="title">
                                    Population {n.type} notes <span>#{n.id}</span>
                                  </p>
                                  <p>{n.note}</p>
                                </Note>
                              }
                            >
                              {n.id && (
                                <span className="tooltipped">
                                  {i === d.notes.length - 1
                                    ? ` ${n.reference}${n.id}`
                                    : ` ${n.reference}${n.id} `}
                                </span>
                              )}
                            </Tooltip>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Size - Year</span>
                      <span className="card-data_result">
                        <strong>{d.size_year}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-2 border-right">
                    <div className="card-data">
                      <span>Size references</span>
                      <div className="notes">
                        {d.size_references &&
                          d.size_references.length &&
                          d.size_references.map((n, i) => (
                            <Tooltip
                              key={`${d.id}${d.populationId}${n.id}`}
                              delay={0}
                              arrow={false}
                              duration={[0, 0]}
                              content={
                                <Note>
                                  <p className="title">
                                    Population size reference <span>#{n.id}</span>
                                  </p>
                                  <p>{n.body}</p>
                                </Note>
                              }
                            >
                              {n.id && (
                                <span className="tooltipped">
                                  {i === d.size_references.length - 1 ? `R${n.id}` : `R${n.id}, `}
                                </span>
                              )}
                            </Tooltip>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Trend - Year</span>
                      <span className="card-data_result">
                        <strong>{d.trend_year}</strong>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-2 border-right">
                    <div className="card-data">
                      <span>Trend references</span>
                      <div className="notes">
                        {d.trend_references &&
                          d.trend_references.length &&
                          d.trend_references.map((n, i) => (
                            <Tooltip
                              key={`${d.id}${d.populationId}${n.id}`}
                              delay={0}
                              arrow={false}
                              duration={[0, 0]}
                              content={
                                <Note>
                                  <p className="title">
                                    Population trend reference <span>#{n.id}</span>
                                  </p>
                                  <p>{n.body}</p>
                                </Note>
                              }
                            >
                              {n.id && (
                                <span className="tooltipped">
                                  {i === d.trend_references.length - 1 ? `R${n.id}` : `R${n.id}, `}
                                </span>
                              )}
                            </Tooltip>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>1% Yearset</span>
                      <span className="card-data_result">
                        <strong>{d.yearset}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        );
      }
    )
  )
}

PopulationsList.propTypes = {
  specieId: PropTypes.number.isRequired,
  populationData: PropTypes.array.isRequired
}

export default PopulationsList;
