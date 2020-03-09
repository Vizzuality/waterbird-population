import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Button from 'components/button';
import Modal from 'components/modal';
import './styles.scss';


const Login = () => {
  const [isOpen, toggleModal] = useState(false);

  const handleClick = () => {
    toggleModal(!isOpen);
  }

  return (
    <div className="c-login">
      <Button onClick={handleClick}>Login</Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={()=>toggleModal(false)}>


      Login
      </Modal>
    </div>
  )
}


export default Login;
