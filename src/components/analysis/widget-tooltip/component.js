import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

function getValue(item, value) {
  const { format, suffix = '', preffix = '' } = item;
  let val = value;

  if (format && typeof format === 'function') {
    val = format(val);
  }

  return `${preffix}${val}${suffix}`;
}

function Tooltip({ payload, settings, style, hideZeros, title, type }) {
  const values = payload && payload.length > 0 && payload[0].payload;

  return (
    <div>
      {settings && settings.length && (
        <div className="chart_tooltip" style={style}>
          {title && (<h3 className="data_title">{title}</h3>)}
          {settings.map(
            d => (hideZeros && values[d.key] ? null : (
              <div
                key={d.key}
                className={classnames('data_line', {
                  '-column': type === 'column'
                })}
              >

                {/* LABEL */}
                {(d.key) && (
                  <>
                    <div className="data_label">
                      {d.color && (
                        <div
                          className="data_color"
                          style={{ backgroundColor: d.color }}
                        />
                      )}
                      {values && d.key && (
                        <>
                          {d.key === 'break'
                            ? <span className="break_label">{d.label}</span>
                            : <span>{d.label || values[d.labelKey]}</span>}
                        </>
                      )}
                    </div>
                    <div className={classnames('data_value', {
                      '-column': type === 'column'
                    })}>
                      {values && d.key && getValue(d, values[d.key])}
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

Tooltip.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({})),
  settings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  style: PropTypes.shape({}),
  hideZeros: PropTypes.bool
};

Tooltip.defaultProps = {
  payload: [],
  style: {},
  hideZeros: false
};

export default Tooltip;
