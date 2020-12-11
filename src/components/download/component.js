import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { invokeCSVDownload, encodeAsCSVContent } from 'utils/csv';
import {
  fetchDataToDownload,
  fetchPopulationsCardData
} from 'services/population';

import Image from './download.svg';
import './styles.scss';

const Download = ({ type, dataSpecs, filename, text, className, imageSize }) => {
  const handleClick = async () => {
    const fetchFunction =
      {
        overview: fetchDataToDownload,
        'explore-detail': fetchDataToDownload,
        'populations-card': fetchPopulationsCardData
      }[type] || (() => {});
      const data = await fetchFunction(dataSpecs);
      if (data) {
        const title = `${filename}-${Date.now()}.csv`;
        invokeCSVDownload(encodeAsCSVContent(data), title);
      }
    };

  return (
    <button
      className={classnames(
        'c-download',
        className
      )}
      onClick={handleClick}
    >
      <span>{text}</span>
      <img src={Image} alt="download" className={classnames(imageSize)} name="download" />
    </button>
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
