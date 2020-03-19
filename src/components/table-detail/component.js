import React from 'react';
import PropTypes from 'prop-types';

import image from 'images/ostralegus.jpg'

import TableInfo from './constants';
import TableCard from 'components/table-card';

import './styles.scss';


const TableDetail = ({ }) => {
  const info = TableInfo; // info coming from props when we get data
  return (
    <div className="c-data-detail">
      <h1>
        {info.title}
      </h1>
      <table>
        <tbody>
          {info.data.map(i =>
            <>
              {(i.property && (i.name || i.tag)) &&
                <>
                  <tr>
                    <td>{i.property}</td>
                    <th><strong>{i.name || i.tag}</strong></th>
                  </tr>
                </>}
              {i.list &&
                <tr>
                  {i.list.map(item =>
                    <>
                      {item.firstProperty && <td>{item.firstProperty}</td>}
                      <th>{item.property}<strong>{item.name}</strong></th>
                    </>
                  )}
                </tr>
              }
            </>
          )}





        </tbody>
      </table>
    </div >
  )
}


TableDetail.propTypes = {
  info: PropTypes.shape({}).isRequired
}

export default TableDetail;

