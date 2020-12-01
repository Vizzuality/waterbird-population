import React from 'react';
import Modal from 'react-modal';
import './styles.scss';

import Icon from 'components/icon';

Modal.setAppElement('#root');

export default (props) => {

  const { children, onRequestClose, ...domProps } = props;

  return (
    <Modal
      className="c-modal"
      onRequestClose={onRequestClose}
      {...domProps}
    >
      <div className="modal-content">
        <button
          aria-label="close-modal"
          type="button"
          className="modal-button"
          onClick={onRequestClose}
        >
          <Icon name="close" className="-huge" />
        </button>
        {children}
      </div>
    </Modal>
  );
};
