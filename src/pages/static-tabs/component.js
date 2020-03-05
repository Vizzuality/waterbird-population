import React from 'react';

import './styles.scss';

const TabInfo = ({ info, extraSection }) =>
  <div className="l-tab-info">
    {info.map(info => (
      <div className="content">
        {(info.title || info.intro) && info.title || info.intro}
        {info.description}
      </div>
    ))}
    {extraSection && <div>{info.extraSection}</div>}
  </div>

export default TabInfo;
