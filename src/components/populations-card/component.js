import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';

// components
import Icon from 'components/icon';
import Tooltip from 'components/tooltip';

import Download from 'components/download';
import './styles.scss';

const PopulationsCards = ({ specieId, data }) => {
  const tag = true;
  return (
    data.map(
      d => {
        return (
          <section className="c-card-info">
            <Link to={`/explore/${specieId}/${d.populationId}`} on>
              <div className="card-header">
                <div className="card-title">
                  <div className="title">
                    <h4>
                      Population:
                  </h4>
                    {tag && <span>under review</span>}
                  </div>
                  <h4 className="subtitle">{d.name}</h4>
                </div>

                <div className="card-buttons">
                  <button type="button">
                    <p>More info</p>
                    <Icon name="info" />
                  </button>
                  <Download
                    text={'Download data'}
                    data={data}
                  />
                </div>
              </div>
              <div className="wrapper">
                <div className="row">
                  {/* {filters.size && ( */}
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Size</span>
                      <span><strong>{d.size}</strong></span>
                    </div>
                  </div>
                  {/* )} */}
                  {/* {filters.size_quality && ( */}
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Size estimate quality</span>
                      <span><strong>{d.size_estimates_quality}</strong></span>
                    </div>
                  </div>
                  {/* )} */}
                  {/* {filters.trend && ( */}
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Trend</span>
                      <span><strong>{d.trend}</strong></span>
                    </div>
                  </div>
                  {/* )} */}
                  {/* {filters.trend_quality && ( */}
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Trend quality</span>
                      <span><strong>{d.trend_quality}</strong></span>
                    </div>
                  </div>
                  {/* )} */}
                  {/* {filters.percent_threshold && ( */}
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>1% Threshold</span>
                      <span><strong>{d.percent}</strong></span>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Notes</span>
                      <span><strong>{d.percent}</strong></span>
                    </div>
                  </div>
                  {/* )} */}
                  {/* {filters.size_year && ( */}
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Size - Year</span>
                      <span><strong>{d.size}</strong></span>
                    </div>
                  </div>
                  {/* )} */}
                  {/* {filters.size_references && ( */}
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Size references</span>
                      <div className="notes">
                        {d.size_reference_notes && d.population_size_reference_notes_info && (
                          <Tooltip
                            content={<span>d.population_size_reference_notes_info</span>}
                          >
                            <span>{d.size_reference_notes}</span>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* )} */}
                  {/* {filters.trend_year && ( */}
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Trend - Year</span>
                      <span><strong>{d.trend_year}</strong></span>
                    </div>
                  </div>
                  {/* )} */}
                  {/* {filters.trend_references && ( */}
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>Trend references</span>
                      <span><strong>{d.trend_references}</strong></span>
                    </div>
                  </div>
                  {/* )} */}
                  {/* {filters.percent_yearset && ( */}
                  <div className="col-sm-2">
                    <div className="card-data">
                      <span>1% Yearset</span>
                      <span><strong>{d.yearset}</strong></span>
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </Link>
          </section>
        )
      }
    )
  )
}

PopulationsCards.propTypes = {
  info: PropTypes.array.isRequired
}

export default PopulationsCards;
