import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TabInfo = ({ info, extraSection }) => (
  <div className="l-tab-info">
    {info.map(({ id, title, description }) => (
      <div key={title || id}>
        {title && <h2>{title}</h2>}
        {description}
      </div>
    ))}
    {extraSection && <div>{extraSection}</div>}
  </div>
);

TabInfo.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.shape({}),
      extraSection: PropTypes.shape({}),
    })
  ).isRequired,
  extraSection: PropTypes.bool,
};

TabInfo.defaultProps = {
  extraSection: false,
};

export default TabInfo;
