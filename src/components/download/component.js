import React from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import classnames from 'classnames';

import Icon from 'components/icon';
import './styles.scss';

const Download = ({ data, filename, headers, text, className }) => {

  const handleClick = (e) => e.stopPropagation();

  return (
    <CSVLink
      className={classnames('c-download', className)}
      data={data || 'No data available'}
      headers={headers}
      onClick={handleClick}
      filename={`${filename}-${Date.now()}.csv`}
    >
      <span>{text}</span>
      <Icon name="download" />
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
