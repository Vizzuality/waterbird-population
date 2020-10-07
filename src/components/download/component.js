import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import classnames from 'classnames';

import {
  fetchDataToDownload,
  fetchPopulationsCardData
} from 'services/population';

import Image from './download.svg';
import './styles.scss';

const Download = ({ type, dataSpecs, filename, headers, text, className, imageSize }) => {
  const [data, setData] = useState('No data available')

  const handleClick = (e) => {
    e.stopPropagation();

    (type === 'overview' || type === 'explore-detail') && fetchDataToDownload(dataSpecs).then(data => setData(data));
    type === 'populations-card' && fetchPopulationsCardData(dataSpecs).then(data => setData(data));
  };

  return (
    <CSVLink
      className={classnames(
        'c-download',
        className,
        { '-disabled': !data } )}
      data={data}
      headers={headers}
      onClick={handleClick}
      filename={`${filename}-${Date.now()}.csv`}
    >
      <span>{text}</span>
      <img src={Image} alt="download" className={classnames(imageSize)} name="download" />
    </CSVLink>
  )
};

Download.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  filename: PropTypes.string,
  headers: PropTypes.string,
  text: PropTypes.string,
}

Download.defaultProps = {
  data: null,
  filename: null,
  headers: '',
  text: 'Download'
}

export default Download;
