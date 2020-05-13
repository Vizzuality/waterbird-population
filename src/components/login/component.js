import React, { useState } from 'react';
import classnames from 'classnames';
import Button from 'components/button';
import Modal from 'components/modal';

import './styles.scss';

const Login = () => {
  const [isOpen, toggleModal] = useState(false);
  const [form, changeState] = useState({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const handleClick = () => {
    toggleModal(!isOpen);
  }

  const handleChange = (e) => {
    changeState({ ...form, [e.target.name]: e.target.value })
  };

  return (
    <div className="c-login">
      <Button onClick={handleClick} className="-background -primary">Login</Button>
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
            <a href="">Recover password</a>
          </form>
          <Button type="submit" className={classnames(
            '-background -secondary -big', {
            '-disable': !email.length  || !password.length
          })}>
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
