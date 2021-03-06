import React, { useState } from 'react';
import classnames from 'classnames';
import Cookies from 'js-cookie';
import MediaQuery from 'react-responsive';
import Button from 'components/button';
import Modal from 'components/modal';
import { fetchUser } from 'services/users';
import Icon from 'components/icon';
import CryptoJS from 'crypto-js';

import { breakpoints } from 'utils/breakpoints';

import './styles.scss';

const Login = ({ user, setUser, resetUser }) => {
  const [isOpen, toggleModal] = useState(false);
  const [submissionError, setSubmission] = useState(false);
  const [form, changeState] = useState({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const handleClick = () => {
    toggleModal(!isOpen);
  };

  const handleLogout = () => {
    Cookies.remove('user')
    resetUser();
  };

  const handleChange = (e) => {
    setSubmission(false);
    changeState({ ...form, [e.target.name]: e.target.name === 'password' ? CryptoJS.SHA256(e.target.value) : e.target.value });
  };

  const handleSubmit = () => {
    const { email, password } = form;
    fetchUser(email, password).then((data) => {
      if (data !== undefined) {
        Cookies.set('user', {
          email: data.email,
          id: data.cartodb_id,
          name: data.name,
          rol: data.rol
        });
        setUser(data)
        toggleModal(false)
      }
      !data && setSubmission(true)
    })
  }

  return (
    <div className="c-login">
      {user.name && (
        <div className="dropdown">
          <MediaQuery minWidth={breakpoints.sm}>
            {user.name}
          </MediaQuery>

          <MediaQuery maxWidth={breakpoints.sm}>
            <Icon name="user-o" className="-big" style={{ fill: '#BFD630' }} />
          </MediaQuery>

          <div className="dropdown-content">
            <div>{user.name}</div>
            <button aria-label="log-out" onClick={handleLogout}>
                log out
            </button>
          </div>
        </div>)}
      {!user.name && (
      <Button
        aria-label="log-in"
        onClick={handleClick}
        className="-background -primary"
      >
        Login
      </Button>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
      >
        <div className="login-modal-content">
          <h3><span>Welcome,</span> sign in to continue</h3>
          <form method="post">
            <label htmlFor="email">
              EMAIL
            </label>
            <input onChange={handleChange} name="email" type="email" id="email" placeholder="email" required />
            <label htmlFor="password">
              PASSWORD
            </label>
            <input onChange={handleChange} name="password" type="password" id="password" placeholder="password" required />
            {submissionError && <div className="text error">Username or password incorrect</div>}
            <a
              href={`mailto:?to=wpe@wetlands.org&subject=Password reminder&body=I would like a reminder of my password, username: ${email}`}
              target="_blank"
              className="text"
              rel="noopener noreferrer"
            >
              Recover password
            </a>
          </form>
          <Button
            aria-label="sign-in"
            type="submit"
            className={classnames(
              '-background -secondary -big', {
              '-disable': !email.length && !password.length && submissionError
            })}
            onClick={handleSubmit}
            disabled={!email.length && !password.length && submissionError}
          >
            Sign in
          </Button>
        </div>
        <div className="login-footer">
          <p>Dont have an account?
            <a
              href={`mailto:?to=post@wetlands.org`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us
            </a>
          </p>
        </div>
      </Modal>
    </div>
  )
}


export default Login;
