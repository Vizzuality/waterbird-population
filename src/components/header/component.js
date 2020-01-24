import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const Header = (text='WATERBIRD POPULATION', classname='') => (
  <div
    className={classnames('c-header',
      {[classname]: classname})}
  >
     {text}
  </div>
);

export default Header;
