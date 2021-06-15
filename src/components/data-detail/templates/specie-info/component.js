import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const SpecieInfo = ({ data }) => {
  return (
    <div className={classnames('c-population-specie-info')}>
      <div className="header">
        <h2>Species information</h2>
      </div>

      <div className="population-info--summary">
        {data.map((i, ix) => {
          return (
            <div key={ix} className="population-info--summary-item">
              {i.map((i2) => (
                <div key={i2.value} className="population-info--summary-item-container">
                  <div
                    className={classnames('population-info--summary-item-head', {
                      [i2.className]: !!i2.className,
                    })}
                  >
                    {i2.head}
                  </div>
                  <div
                    style={{
                      backgroundColor: i2.backgroundColor,
                      border: `1px solid ${i2.border}`,
                    }}
                    className={classnames({
                      'population-info--summary-item-value': true,
                      [i2.className]: !!i2.className,
                      [i2.color]: !!i2.color,
                    })}
                  >
                    {i2.value}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

SpecieInfo.propTypes = {
  data: PropTypes.array,
};

SpecieInfo.defaultProps = {
  data: [],
};

export default SpecieInfo;
