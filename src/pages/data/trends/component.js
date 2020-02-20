import React from 'react';
import classnames from 'classnames';
import DangerousHTML from 'react-dangerous-html';

import trendsInfo from './constants';

import './styles.scss';

const PopulationTrends = () =>
  <div className="l-population-trends">
    <div className="content">
      {trendsInfo.map(info =>
      <>
        <h2>{info.title}</h2>
        <div>{info.description.map(description =><p>{description.p}</p>)}</div>
        {info.list &&
          <ul>
            {info.list.map(item =>
            <li className={classnames(
              { 'bullet': item.itemBullet,
                'numbered': item.itemNumbered }
            )}><div><DangerousHTML html={item.itemBullet || item.itemNumbered || item.item} /></div></li>)}
          </ul>
        }
      </>)}
    </div>
  </div>

export default PopulationTrends;
