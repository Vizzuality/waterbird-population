import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Cookies from 'js-cookie';

// components
import Button from 'components/button';
import Modal from 'components/modal';
import Icon from 'components/icon';
import Login from 'components/user-signin/login';
import Register from 'components/user-signin/register';

import { breakpoints } from 'utils/breakpoints';

import './styles.scss';

const SigInSigupContainer = ({ user, resetUser, modalContent, className }) => {
  const [isOpen, toggleModal] = useState(false);
  const [content, setContent] = useState(modalContent);

  const handleClick = () => {
    toggleModal(!isOpen);
  };

  const handleLogout = () => {
    Cookies.remove('user');
    resetUser();
  };

  const handleClose = () => {
    if (content === 'sign-up') {
      setContent('sign-in');
    }
    toggleModal(!isOpen);
  };

  return (
    <div key={`${content}-${isOpen}`} className={cx('c-login', { [className]: !!className })}>
      {content === 'sign-in' && user.name && (
        <div className="dropdown">
          <MediaQuery minWidth={breakpoints.sm}>{user.name}</MediaQuery>

          <MediaQuery maxWidth={breakpoints.sm}>
            <Icon name="user-o" className="-big" style={{ fill: '#BFD630' }} />
          </MediaQuery>

          <div className="dropdown-content">
            <div>{user.name}</div>
            <button aria-label="log-out" onClick={handleLogout}>
              log out
            </button>
          </div>
        </div>
      )}
      {content === 'sign-in' && !user.name && (
        <Button aria-label="log-in" onClick={handleClick} className="-background -primary">
          Login
        </Button>
      )}

      {content === 'sign-up' && (
        <Button aria-label="join-us" onClick={handleClick} className="-background -primary">
          Join us
        </Button>
      )}

      <Modal isOpen={isOpen} onRequestClose={() => handleClose()}>
        {content === 'sign-in' ? (
          <Login handleContent={() => setContent('sign-up')} toggleModal={toggleModal} />
        ) : (
          <Register handleContent={() => setContent('sign-in')} />
        )}
      </Modal>
    </div>
  );
};

SigInSigupContainer.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  resetUser: PropTypes.func.isRequired,
  modalContent: PropTypes.string.isRequired,
  router: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
  }),
  className: PropTypes.string,
};

SigInSigupContainer.defaultProps = {
  router: PropTypes.shape({
    id: null,
    email: null,
  }),
  className: '',
};

export default SigInSigupContainer;
