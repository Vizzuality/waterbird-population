import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/icon';

import CardTableInfo from './constants';

import './styles.scss';


const TableCard = ({ }) => {
  const info = CardTableInfo; // info coming from props when we get data

  return <div className="c-table-card">
    <div className="table-card-header">
      <div className="table-card-title">
        <h4 className="table-title">{Object.keys(info.title)}</h4>
        <h4 className="table-subtitle">{Object.values(info.title)}</h4>
      </div>

      <div className="table-card-buttons">
        <button type="button">
          More info
          {/* <Icon name="info" /> */}
        </button>
        <button type="button">
          Download data
          {/* <Icon name="download" /> */}
        </button>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          {Object.keys(info.columns).map(i => <th scope="column">{i}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(info.columns).map(i => <td scope="column">{i}</td>)}
        </tr>
      </tbody>
    </table>
  </div>
}


TableCard.propTypes = {
  info: PropTypes.shape({}).isRequired
}

export default TableCard;
