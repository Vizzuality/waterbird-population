import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import info from './constants';
import './styles.scss';

const PopulationInfo = () => (
  <div className="c-population-info">
    <div className="header">
      <h2>{info.title}</h2>
    </div>
    <div className="info-content">
      {info.data.map((i, j) => console.log(i,j) ||
        <div className={`grid-item-${j+1}`}>
          <div className="item-content">
            <p className="head">{Object.keys(i)}</p>
            <p className="info">{Object.values(i)}</p>
          </div>
        </div>
      )}
      {/* <div className="grid-item-3">
        <p className="head">Order family</p>

      </div>
      <div className="grid-item-4">
        <p className="info">Anatidae</p>

      </div>
      <div className="grid-item-5">
        <p className="head">Scientific name</p>

      </div>
      <div className="grid-item-6">
        <p className="info">Anas acuta</p>

      </div>
      <div className="grid-item-7">
        <p className="head">Common name</p>

      </div>
      <div className="grid-item-8">
        <p className="info">Northern Pintail</p>

      </div>

      <div className="grid-item-9">
        <p className="head">Population name</p>

      </div>
      <div className="grid-item-10">
        <p className="info">South Africa (non-bre)</p>
      </div>
      <div className="grid-item-11">
        <p className="head">Breeding range</p>
      </div>
      <div className="grid-item-12">
        <p className="info">Central Siberian, Central Asia</p>
      </div>
      <div className="grid-item-13">
        <p className="head">Non-breeding range</p>
      </div>
      <div className="grid-item-14">
        <p className="info">S Asia</p>

      </div>
      <div className="grid-item-15">
        <p className="head">Red list</p>
      </div>
      <div className="grid-item-16">
        <p className="info tag">Least concern</p>
      </div>
      <div className="grid-item-17">
        <p className="head">Ramsar region</p>
      </div>
      <div className="grid-item-18">
        <p className="info">Asia</p>
      </div> */}
    </div>
  </div>
)

PopulationInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array
  }).isRequired
}

export default PopulationInfo;
