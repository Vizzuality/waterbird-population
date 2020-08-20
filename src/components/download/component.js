import React from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';

import Icon from 'components/icon';
import './styles.scss';

const DownloadLink = ({ data, filename, headers }) => (
  <CSVLink
    className="c-download"
    data={'No data available' || data}
    headers={headers}
    filename={`${filename}-${Date.now()}.csv`}
  >
    <span>Download data</span>
    <Icon name="download" />
  </CSVLink >
);

DownloadLink.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  filename: PropTypes.string,
  headers: PropTypes.string,
}

DownloadLink.defaultProps = {
  data: null,
  filename: null,
  headers: ''
}

export default DownloadLink;
