import './styles.scss';
import React from 'react';

const MapControls = ({ children }) => {
  return (
    <div className="c-map-controls">
      {children}
    </div>
  )
};

export default MapControls;
