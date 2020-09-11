import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const PopulationInfo = ({ data }) => {
  return (
    <div className={classnames('c-population-info')}>
      <div className="header">
        <h2>Population information</h2>
      </div>

      <div className="population-info--summary">
        {(data.map((i, ix) => {

          return (
            <div key={ix} className="population-info--summary-item">
              {i.map(i2 => (
                <div key={i2.head} className="population-info--summary-item-container">
                  <div className="population-info--summary-item-head">{i2.head}</div>
                  <div style={{ backgroundColor: i2.color, border: `1px solid ${i2.border}` }}
                    className={classnames({
                      "population-info--summary-item-value": true,
                      [i2.className]: !!i2.className
                    })}
                  >
                    {i2.value}
                  </div>
                </div>
              ))}
            </div>
          );
        }))}
      </div>
    </div >
  )
};

PopulationInfo.propTypes = {
  data: PropTypes.array
}

PopulationInfo.defaultProps = {
  data: []
}

export default PopulationInfo;
