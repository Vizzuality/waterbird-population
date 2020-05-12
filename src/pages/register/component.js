import React, { useState } from 'react';
import classnames from 'classnames';
import Button from 'components/button';
import Modal from 'components/modal';

import Image from './images/register.png';
import './styles.scss';

const Register = () => {

  const [form, changeState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    comments: '',
  });

  const {
    name,
    email,
    phone,
    company,
    comments,
  } = form;

  const [isOpen, toggleModal] = useState(true);

  const handleChange = (e) => {
    changeState({ ...form, [e.target.name]: e.target.value })
  };

  return (
    <div className="l-register">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
      >
        <div className="modal-container">
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
            <Button type="submit" className={classnames(
              '-background -secondary -big', {
              '-disable':
                !name.length ||
                !email.length  ||
                !phone.length ||
                !company.length ||
                !comments.length
              }
            )}>
              Send
          </Button>
          </div>
          <img src={Image} alt='bird' />
        </div>
      </Modal>
    </div>
  );
};

export default Register;
