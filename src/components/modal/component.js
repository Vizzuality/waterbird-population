import React from 'react';
import Modal from 'react-modal';
import './styles.scss';

Modal.setAppElement('#root');

export default (props) => {
  const { children, ...domProps } = props;
  return (
    <Modal
      {...domProps}
    >
      {children}
    </Modal>
  );
};
