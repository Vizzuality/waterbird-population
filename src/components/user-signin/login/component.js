import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

// components
import Button from 'components/button';

// services
import { fetchUser } from 'services/users';

import { RECOVER_PASSWORD_EMAIL_DETAILS } from './constants';

import './styles.scss';

const Login = ({ setUser, handleContent, toggleModal }) => {
  const [submissionError, setSubmission] = useState(false);
  const [form, changeState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;
  const { mailto, body, subject } = RECOVER_PASSWORD_EMAIL_DETAILS;
  const { head, core, username } = body;

  const handleChange = (e) => {
    setSubmission(false);
    changeState({
      ...form,
      [e.target.name]:
        e.target.name === 'password' ? CryptoJS.SHA256(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    fetchUser(email, password).then((data) => {
      if (data !== undefined) {
        Cookies.set('user', {
          email: data.email,
          id: data.cartodb_id,
          name: data.name,
          rol: data.rol,
        });
        setUser(data);
        toggleModal(false);
      }
      !data && setSubmission(true);
    });
  };

  return (
    <div className="c-login">
      <form className="login-modal-container" onSubmit={(e) => handleSubmit(e)}>
        <h3>
          <span>Welcome,</span> sign in to continue
        </h3>
        <div className="login-modal-content">
          <label htmlFor="email">EMAIL</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            id="email"
            placeholder="email"
            required
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            id="password"
            placeholder="password"
            required
          />
          {submissionError && <div className="text error">Username or password incorrect</div>}
          <a
            href={`mailto:?to=${mailto}&subject=${subject}&body=${head}${core}
              ${' '}${username}${email}`}
            target="_blank"
            className="text"
            rel="noopener noreferrer"
          >
            Recover password
          </a>
        </div>
        <Button
          aria-label="sign-in"
          type="submit"
          className={classnames('-background -secondary -big', {
            '-disable': !email.length && !password.length && submissionError,
          })}
          disabled={!email.length && !password.length && submissionError}
        >
          Sign in
        </Button>
      </form>
      <div className="login-footer">
        <p>Don&apos;t an account?</p>
        <button onClick={handleContent}>Join us</button>
      </div>
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  handleContent: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Login;
