import React from 'react';
import './styles.scss';

const TabInfo = ({ info, extraSection }) =>
  <div className="l-tab-info">
    {info.map(info => (
      <div key={info.title || info.id}>
        {info.title && <h2>{info.title}</h2>}
        {info.description}
      </div>
    ))}
    {extraSection && <div>{info.extraSection}</div>}
  </div>

export default TabInfo;
