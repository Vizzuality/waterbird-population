import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import classnames from 'classnames';

import Image from './download.svg';
import './styles.scss';

const Download = ({ data, filename, headers, text, className, imageSize }) => {
  const handleClick = (e) => e.stopPropagation();

  useEffect(() => {
  }, [data]);

  return (
    <CSVLink
      className={classnames(
        'c-download',
        className,
        { '-disabled': !data } )}
      data={data || 'No data available'}
      headers={headers}
      onClick={handleClick}
      filename={`${filename}-${Date.now()}.csv`}
    >
      <span>{text}</span>
      <img src={Image} className={classnames(imageSize)} name="download" />
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
