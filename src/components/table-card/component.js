import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import classnames from 'classnames';

import Icon from 'components/icon';

import CardTableInfo from './constants';

import './styles.scss';


const TableCard = ({ }) => {
  const info = CardTableInfo; // info coming from props when we get data
  const tag = true;

  return <div className="c-card-info">
    <Link to="/explore/info">
      <div className="card-header">
        <div className="card-title">
          <div className="title">
            <h4>
              {Object.keys(info.title)}
            </h4>
            {tag && <span>under review</span>}
          </div>
          <h4 className="subtitle">{Object.values(info.title)}</h4>
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
      <div className="card-data">
        {info.data.map(i =>
          <div>
            <p className="data-property">{Object.keys(i)}</p>
            <p className={classnames('data-value',
              // { '-number': typeof(Object.keys(i)[0] === Number) }
            )}
            >
              {Object.values(i)}
            </p>
          </div>
        )}
      </div>
    </Link>
  </div>
}

TableCard.propTypes = {
  info: PropTypes.array.isRequired
}

export default TableCard;
