import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';

// components
import Icon from 'components/icon';

import './styles.scss';


const PopulationsCard = ({ population: { info, size, trends, percent }, filters, specie }) => {
  const tag = true;
  return <section className="c-card-info">
    <Link to="/explore/info">

      <div className="card-header">
        <div className="card-title">
          <div className="title">
            <h4>
              Population:
            </h4>
            {tag && <span>under review</span>}
          </div>
          <h4 className="subtitle">{info.population_name}</h4>
        </div>

        <div className="card-buttons">
          <button type="button">
            <p>More info</p>
            <Icon name="info" />
          </button>
          <button type="button">
            <p>Download data</p>
            <Icon name="download" />
          </button>
        </div>
      </div>
      <div className="wrapper">
        <div className="row">
          {filters.size && (
            <div className="col-sm-2">
              <div className="card-data">
                <span>Size</span>
                <span><strong>{`${size.minimum} - ${size.maximun}`}</strong></span>
              </div>
            </div>
          )}
          {filters.size_quality && (
            <div className="col-sm-2">
              <div className="card-data">
                <span>Size estimate quality</span>
                <span><strong>{`${size.start_year} - ${size.end_year}`}</strong></span>
              </div>
            </div>
          )}
          {filters.trend && (
            <div className="col-sm-2">
              <div className="card-data">
                <span>Trend</span>
                <span><strong>{trends.trend}</strong></span>
              </div>
            </div>
          )}
          {filters.trend_quality && (
            <div className="col-sm-2">
              <div className="card-data">
                <span>Trend quality</span>
                <span><strong>{trends.trend_quality}</strong></span>
              </div>
            </div>
          )}
          {filters.percent_threshold && (
            <div className="col-sm-2">
              <div className="card-data">
                <span>1% Threshold</span>
                <span><strong>{percent.percent}</strong></span>
              </div>
            </div>
          )}
        {filters.size_year && (
          <div className="col-sm-2">
            <div className="card-data">
              <span>Size - Year</span>
              <span><strong>{`${size.start_year} - ${size.end_year}`}</strong></span>
            </div>
          </div>
        )}
        {filters.size_references && (
          <div className="col-sm-2">
            <div className="card-data">
              <span>Size references</span>
              <span><strong>{`***${size.start_year} - ${size.end_year}***`}</strong></span>
            </div>
          </div>
        )}
        {filters.trend_year && (
          <div className="col-sm-2">
            <div className="card-data">
              <span>Trend - Year</span>
              <span><strong>{`${trends.start_year} - ${trends.end_year}`}</strong></span>
            </div>
          </div>
        )}
        {filters.trend_references && (
          <div className="col-sm-2">
            <div className="card-data">
              <span>Trend references</span>
              <span><strong>{`***${trends.start_year} - ${trends.end_year}***`}</strong></span>
            </div>
          </div>
        )}
        {filters.percent_yearset && (
          <div className="col-sm-2">
            <div className="card-data">
              <span>1% Yearset</span>
              <span><strong>{percent.yearset}</strong></span>
            </div>
          </div>
        )}
      </div>
      </div>
    </Link >
  </section >
}

PopulationsCard.propTypes = {
  info: PropTypes.array.isRequired
}

export default PopulationsCard;
