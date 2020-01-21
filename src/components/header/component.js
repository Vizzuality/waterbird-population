import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const Header = (text, classname='hola') => (
  <div
    className={classnames('c-header',
      {[classname]: classname})}
  >
     WATERBIRD POPULATION
  </div>
);

export default Header;
