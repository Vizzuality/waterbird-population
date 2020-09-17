import React, { useState } from "react";
import classnames from "classnames";
import CryptoJS from 'crypto-js';

import Button from "components/button";
import Modal from "components/modal";

import Image from "./images/register.png";
import "./styles.scss";
import { registerUser } from "services/users";

const Register = () => {
  const defaultForm = {
    name: "",
    password: "",
    email: "",
    phone: "",
    company: "",
    comments: ""
  };

  const [form, changeState] = useState(defaultForm);
  const [isOpen, toggleModal] = useState(false);

  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState(false);

  const { name, email } = form;

  const handleClick = () => {
    setConfirmation(false);
    toggleModal(!isOpen);
  };

  const handleChange = e => {
    setConfirmation(false)
    changeState({ ...form, [e.target.name]:
      e.target.name === 'password' ? CryptoJS.SHA256(e.target.value) : e.target.value });
  };

  const handleSubmit = () => {
    registerUser({ ...form })
      .then(({ status }) => {
        if (status === 200) {
          setConfirmation(true);
        }
      })
      .catch(e => setError(true));
  };

  return (
    <div className="c-register">
      <Button onClick={handleClick} className="-background -primary">
        Join us
      </Button>
      <Modal isOpen={isOpen} onRequestClose={() => toggleModal(false)}>
        {confirmation && !error && (
          <div className="login-modal-content">
            <p className="separator">Registration completed succesfully.</p>
            <p>
              Thank you for joining the team. You will receive an email with
              your credentials soon!
            </p>
          </div>
        )}

        {!confirmation && error && (
          <div className="login-modal-content">
            <p className="separator">Something went wrong.</p>
            <p>
              Please try again or{" "}
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
            <div className="login-modal-content">
              <h3>Get started:</h3>
              <form method="post">
                <label htmlFor="name">NAME<sup>*</sup></label>
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  id="name"
                  placeholder="full name"
                  required
                />
                <label htmlFor="name">PASSWORD<sup>*</sup></label>
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  id="name"
                  placeholder="password"
                  required
                />
                <label htmlFor="email">EMAIL<sup>*</sup></label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="email"
                />
                <label htmlFor="phone">PHONE</label>
                <input
                  onChange={handleChange}
                  name="phone"
                  type="tel"
                  id="phone"
                  placeholder="phone number"
                />
                <label htmlFor="company">COMPANY</label>
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
              </form>
              <Button
                type="submit"
                className={classnames("-background -secondary -big", {
                  "-disable": !name.length || !email.length
                })}
                onClick={handleSubmit}
                disabled={!email || !name}
              >
                Send
              </Button>
            </div>
            <img src={Image} alt="bird" />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Register;
