import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'd3-format';

import './styles.scss';

const numberFormat = format(',.2f');

const Legend = ({
  groups,
  unit }) => {
  return (
    <div className="widget_legend">
      {Object.keys(groups).map(g => (
        <div key={g} className="widget_legend_group">
          <ul className="widget_legend_list">
            {groups[g].map((item, i) => (
              <li
                key={`item-${i + 1}-${item.color}`}
                className="widget_legend_list_item"
              >
                  <svg height="12" width="12">
                    <rect
                      className="item"
                      fill={item.color}
                    />
                  </svg>

                <div className="itemWrapper">
                  <span>{item.value}</span>
                  {item.payload && item.payload.y
                    && (
                    <span className="item">
                      {`${numberFormat(item.payload.y)}  ${unit}`}
                    </span>
                    )
                  }
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

Legend.propTypes = {
  groups: PropTypes.shape({}).isRequired,
  unit: PropTypes.string
};

Legend.defaultProps = {
  unit: ''
};

export default Legend;
