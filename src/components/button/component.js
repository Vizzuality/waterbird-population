import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const Button = ({ text, classname = 'hola', nonsenseAction }) => {
  const onClick = () => {
    nonsenseAction('holi');
  };
  return <button
    className={classnames('c-button',
      { [classname]: classname })}
    type='button'
    onClick={onClick}
  >
    {text}
  </button>
};

export default Button;
