import React from 'react';
import classnames from 'classnames';
import './styles.scss';

export default (props) => {
  const { children,
    className,
    dark,
    light,
    ...domProps } = props;

  return (
    <button
      type="button"
      className={classnames('c-button', {
        'dark': dark,
        'light': light
      })}
      {...domProps}
    >
      {children}
    </button>
  );
};
