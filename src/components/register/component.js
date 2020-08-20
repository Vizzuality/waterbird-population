import React, { useState } from 'react';
import classnames from 'classnames';
import Button from 'components/button';
import Modal from 'components/modal';

import Image from './images/register.png';
import './styles.scss';
import { registerUser } from 'services/users';

const Register = () => {

  const defaultForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    comments: '',
  };

  const [form, changeState] = useState(defaultForm);
  const [isOpen, toggleModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const { name, email, password } = form;

  const handleClick = () => {
    setConfirmation(false);
    toggleModal(!isOpen);
  };

  const handleChange = (e) => {
    changeState({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    registerUser({...form});
    changeState(defaultForm);
    setConfirmation(true);
  };

  return (
    <div className="c-register">
      <Button onClick={handleClick} className="-background -primary">Join us</Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
      >
        {confirmation && <div className="login-modal-content">
          <p className="separator">Registration completed succesfully.</p>
          <p>Thank you for joining the team. You will receive an email with your credentials soon!</p></div>}

        {!confirmation && (<div className="modal-container">
          <div className="login-modal-content">
            <h3>Get started:</h3>
            <form method="post">
              <label htmlFor="name">
                NAME
            </label>
              <input onChange={handleChange} name="name" type="text" id="password" placeholder="full name" required />
              <label htmlFor="email">
                EMAIL
            </label>
              <input onChange={handleChange} name="email" type="email" id="email" placeholder="email" required />
              <label htmlFor="phone">
                PHONE
            </label>
              <input onChange={handleChange} name="phone" type="tel" id="phone" placeholder="phone number" required />
              <label htmlFor="company">
                COMPANY
            </label>
              <input onChange={handleChange} name="company" type="text" id="company" placeholder="company name" required />
              <label htmlFor="email">
                COMMENTS
            </label>
              <input onChange={handleChange} name="comments" type="text" id="comments" placeholder="comments" required />
            </form>
            <Button
              type="submit"
              className={classnames(
              '-background -secondary -big', {
              '-disable': !name.length || !email.length
              })}
              onClick={handleSubmit}
              disabled={!email || !name}
            >
              Send
          </Button>
          </div>
          <img src={Image} alt='bird' />
        </div>)}
      </Modal>
    </div>
  );
};

export default Register;
