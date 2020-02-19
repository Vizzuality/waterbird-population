import React from 'react';
import classnames from 'classnames';
import DangerousHTML from 'react-dangerous-html';

import estimatesInfo from './constants';

import './styles.scss';

const SpeciesPopulation = () =>
  <div className="l-population-estimates">
    <div className="content">
      {estimatesInfo.map(info =>
      <>
        <h2>{info.title}</h2>
        <div>{info.description.map(description =><p>{description.p}</p>)}</div>
        {info.list &&
          <ul>
            {info.list.map(item =>
            <li className={classnames(
              { 'bullet': item.itemBullet,
                'numbered': item.itemNumbered }
            )}><div><DangerousHTML html={item.itemBullet || item.itemNumbered} /></div></li>)}
          </ul>
        }
      </>)}
    </div>
  </div>

export default SpeciesPopulation;
