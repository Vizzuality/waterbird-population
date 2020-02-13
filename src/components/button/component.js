import React from 'react';
import classnames from 'classnames';
import './styles.scss';

export default (props) => {
  const { children,
    className,
    ...domProps } = props;

  return (
    <button
      type="button"
      className={classnames('c-button', {
        [className]: className
      })}
      {...domProps}
    >
      {children}
    </button>
  );
};
