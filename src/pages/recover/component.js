import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from 'static/waves.png';

import Modal from 'components/modal';
import Button from 'components/button';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

// services
import { fetchUserByEmailAndId, updateUserByIdAndEmail } from 'services/users';

import './styles.scss';

const RecoverPage = ({ router, setRouter, setUser }) => {
  const { id, email } = router;

  const [isOpen, toggleModal] = useState(!!id && !!email);
  const [form, changeState] = useState({
    email: '',
    password: '',
    passwordVerification: '',
  });
  const { password, passwordVerification } = form;

  const handleChange = (e) => {
    changeState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserByIdAndEmail(CryptoJS.SHA256(password), id, email);
    fetchUserByEmailAndId(email, id).then((data) => {
      if (data !== undefined) {
        Cookies.set('user', {
          email: data.email,
          id: data.cartodb_id,
          name: data.name,
          rol: data.rol,
        });
        setUser(data);
      }
      setRouter('EXPLORE', {});
    });
  };

  return (
    <div className="l-recover" style={{ backgroundImage: `url(${Image})` }}>
      <Modal isOpen={isOpen} onRequestClose={() => toggleModal(false)}>
        <div className="login-modal-container">
          <h3>
            <span>Welcome back,</span> create new password
          </h3>
          <form className="login-modal-content" method="post" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">EMAIL</label>
            <input
              name="email"
              type="email"
              id="email"
              value={email}
              placeholder="email"
              required
            />
            <fieldset className="password-fields">
              <label htmlFor="password">NEW PASSWORD</label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
                placeholder="password"
                required
              />
              <label htmlFor="passwordVerification">CONFIRM NEW PASSWORD</label>
              <input
                onChange={handleChange}
                name="passwordVerification"
                type="password"
                id="passwordVerification"
                placeholder="password"
                required
              />
              {password !== passwordVerification &&
                !!password.length &&
                !!passwordVerification.length && (
                  <div className="text error">Passwords doesn&apos;t match</div>
                )}
            </fieldset>
            <Button
              aria-label="sign-in"
              type="submit"
              className={cx('-background -secondary -big', {
                '-disable': password !== passwordVerification && !!password.length,
              })}
              disabled={password !== passwordVerification && !!password.length}
            >
              Update password
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

RecoverPage.propTypes = {
  setPopulations: PropTypes.func.isRequired,
  router: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
  }).isRequired,
  setRouter: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default RecoverPage;
