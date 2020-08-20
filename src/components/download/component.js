import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';

import Icon from 'components/icon';
import './styles.scss';

class DownloadLink extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
    filename: PropTypes.string,
    headers: PropTypes.string,
  }

  static defaultProps = {
    data: null,
    filename: null,
    headers: ''
  }

  render() {
    const { data, filename, headers } = this.props;
    return (
      <CSVLink
        className="c-download"
        data={data}
        headers={headers}
        filename={`${filename}-${Date.now()}.csv`}
      >
        <Icon name="download" />
        Download data
      </CSVLink>
    );
  }
}

export default DownloadLink;
