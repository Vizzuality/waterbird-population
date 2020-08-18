import React, { useState } from 'react';
import classnames from 'classnames';
import Button from 'components/button';
import Modal from 'components/modal';
import { fetchUser } from 'services/users';

import './styles.scss';

const Login = ({ user, setUser, resetUser }) => {
  const [isOpen, toggleModal] = useState(false);
  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(false);
  const [form, changeState] = useState({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const handleClick = () => {
    toggleModal(!isOpen);
  };

  const handleLogin = () => {
    console.log('hola')
    resetUser();
  };

  const handleChange = (e) => {
    setEmailMessage(false);
    setPasswordMessage(false);
    changeState({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, password } = form;
    fetchUser(email, password).then((data) => {
      if (data === undefined) {
        setEmailMessage(true)
      }
      if (data && data.password !== password) {
        setPasswordMessage(true)
      }
      if (data && data.password === password) {
        setUser(data)
        toggleModal(false)
      }
    })
  }

  return (
    <div className="c-login">
      {user.name && (
        <div className="dropdown">{user.name}
          <button
            className="dropdown-list"
            onClick={handleLogin}>
              log out
          </button>
        </div>)}
      {!user.name && <Button onClick={handleClick} className="-background -primary">Login</Button>}
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
            {emailMessage && <div className="text error">The username is not registered</div>}
            <label htmlFor="password">
              PASSWORD
            </label>
            <input onChange={handleChange} name="password" type="password" id="password" placeholder="password" required />
            {passwordMessage && <div className="text error">Incorrect password</div>}
            <a
              href={`mailto:?to=post@wetlands.org&subject=Password reminder&body=I would like a reminder of my password, username: ${email}`}
              target="_blank"
              className="text"
              rel="noopener noreferrer"
            >
              Recover password
            </a>
          </form>
          <Button
            type="submit"
            className={classnames(
              '-background -secondary -big', {
              '-disable': !email.length || !password.length
            })}
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </div>
        <div className="login-footer">
          <p>Dont have an account?<a href=""> Contact us</a></p>
        </div>
      </Modal>
    </div>
  )
}


export default Login;
