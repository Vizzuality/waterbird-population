import React, { useState } from 'react';
import classnames from 'classnames';
import CryptoJS from 'crypto-js';

// components
import Button from 'components/button';

// services
import { registerUser } from 'services/users';

import './styles.scss';

const Register = () => {
  const defaultForm = {
    name: '',
    password: '',
    email: '',
    company: '',
    comments: '',
  };

  const [form, changeState] = useState(defaultForm);

  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState(false);

  const { name, email } = form;

  const handleChange = (e) => {
    setConfirmation(false);
    changeState({
      ...form,
      [e.target.name]:
        e.target.name === 'password' ? CryptoJS.SHA256(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ ...form })
      .then(({ status }) => {
        if (status === 200) {
          setConfirmation(true);
        }
      })
      .catch(() => setError(true));
  };

  return (
    <div className="c-register">
      {confirmation && !error && (
        <div className="login-modal-container">
          <div className="login-modal-content--registration-message">
            <p className="separator">Just one more step to register.</p>
            <p>
              Please, send an email to our adminstrators to complete the process. Thank you for
              joining us!
            </p>
          </div>

          <a
            href={`mailto:?to=post@wetlands.org&subject=Account activation&body=I’d like to take part of the Waterbirds initiative, please, activate my account. Name - ${name} ${' '}, Email - ${email}} `}
            target="_blank"
            rel="noopener noreferrer"
            className="c-button -border -secondary"
          >
            Send
          </a>
        </div>
      )}

      {!confirmation && error && (
        <div className="login-modal-container">
          <p className="separator">Something went wrong.</p>
          <p>
            Please try again or{' '}
            <a
              href={`mailto:?to=post@wetlands.org&subject=Problems with register&`}
              target="_blank"
              rel="noopener noreferrer"
            >
              contact us
            </a>
          </p>
        </div>
      )}

      {!confirmation && !error && (
        <div className="modal-container">
          <section>
            <form className="login-modal-container" onSubmit={(e) => handleSubmit(e)}>
              <h3>Register here:</h3>
              <div className="login-modal-content">
                <label htmlFor="name">
                  NAME<sup>*</sup>
                </label>
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  id="name"
                  placeholder="full name"
                  required
                />
                <label htmlFor="name">
                  PASSWORD<sup>*</sup>
                </label>
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  id="name"
                  placeholder="password"
                  required
                />
                <label htmlFor="email">
                  EMAIL<sup>*</sup>
                </label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="email"
                />
                <label htmlFor="company">ORGANISATION/AFFILIATION</label>
                <input
                  onChange={handleChange}
                  name="company"
                  type="text"
                  id="company"
                  placeholder="company name"
                />
                <label htmlFor="comments">COMMENTS</label>
                <input
                  onChange={handleChange}
                  name="comments"
                  type="text"
                  id="comments"
                  placeholder="comments"
                />
              </div>
              <Button
                aria-label="send"
                type="submit"
                className={classnames('-background -secondary -big', {
                  '-disable': !name.length || !email.length,
                })}
                disabled={!email || !name}
              >
                Send
              </Button>
            </form>
          </section>
          <section className="register-image">
            <div className="register-image-container" />
          </section>
        </div>
      )}
    </div>
  );
};

export default Register;
