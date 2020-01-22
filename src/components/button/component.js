import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const Button = ({ text, classname = 'hola', action, argument }) => {
  const onClick = () => {
    console.log(action, argument)
    action(argument);
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
