import React from 'react';

import './styles.scss';

const TabInfo = ({ info }) =>
  <div className="l-tab-info">

    {info.map(info => (
      <div className="content">
        <h2>{info.title || info.intro || null}</h2>
        {info.description}
      </div>
    ))}

  </div>

export default TabInfo;
