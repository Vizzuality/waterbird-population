import React from 'react';
import classnames from 'classnames';
import './styles.scss';

export default (props) => {
  const { children,
    isDisabled,
    className,
    ...domProps } = props;

  return (
    <button
      type="button"
      className={classnames({
        ['disabled']: isDisabled,
        [className]: className
      })}
      {...domProps}
    >
      {children}
    </button>
  );
};
