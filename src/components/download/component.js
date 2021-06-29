import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Spinner from 'components/spinner';
import { encodeAsCSVContent } from 'utils/csv';
import {
  fetchDataToDownload,
  fetchDataToDownloadAnalyze,
  fetchPopulationsCardData,
} from 'services/population';

import { fetchReferencesToDownload } from 'services/references';

import Image from './download.svg';
import download from 'downloadjs';

import './styles.scss';

const Download = ({ type, dataSpecs, filename, text, className, imageSize }) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    const fetchFunction =
      {
        'explore-overview': fetchDataToDownload,
        'explore-detail': fetchDataToDownload,
        'populations-card': fetchPopulationsCardData,
        analyze: fetchDataToDownloadAnalyze,
        references: fetchReferencesToDownload,
      }[type] || (() => {});
    const data = await fetchFunction(dataSpecs);
    if (data) {
      const title = `${filename}-${Date.now()}.csv`;
      await download(encodeAsCSVContent(data), title, 'text/csv');
    }
    setLoading(false);
  };

  return (
    <button className={classnames('c-download', className)} onClick={handleClick}>
      <span>{text}</span>
      {loading ? (
        <Spinner />
      ) : (
        <img src={Image} alt="download" className={classnames(imageSize)} name="download" />
      )}
    </button>
  );
};

Download.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  filename: PropTypes.string,
  headers: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  imageSize: PropTypes.string,
  dataSpecs: PropTypes.shape({}).isRequired,
};

Download.defaultProps = {
  data: null,
  filename: null,
  headers: '',
  text: 'Download',
  className: '',
  imageSize: null,
};

export default Download;
