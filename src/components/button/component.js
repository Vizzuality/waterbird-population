import React from 'react';

import './styles.scss';

const Button = ({ text }) => {
  const onClick = () => {

  };
  return <button
    className="c-button'"
    type='button'
    onClick={onClick}
  >
    {text}
  </button>
};

export default Button;
