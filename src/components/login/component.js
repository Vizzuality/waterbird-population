import React from 'react';
import Button from 'components/button';
import Modal from 'components/modal';
import './styles.scss';


const Login = ({ toggleModal }) => {

  const handleClick = () => {
    toggleModal();
  }
  return (
    <div className="c-login">
      <Button dark onClick={handleClick}>Login</Button>
    </div>
  )
}


export default Login;
