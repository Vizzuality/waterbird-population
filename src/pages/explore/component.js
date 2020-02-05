import React, { useState } from 'react';
import Link from 'redux-first-router-link';
import Modal from 'components/modal';
import NavBar from 'components/nav-bar';

import './styles.scss';

const Explore = () => {

  const [modal, toggleModal] = useState(false);
  const closeModal = () => {
    toggleModal(false);
  }

  return <div className="l-explore">


  <button onClick={() => toggleModal(!modal)}>toggle modal</button>
  <Modal
    isOpen={modal}
    onRequestClose={closeModal}><h3>Modal title</h3><p>Modal info</p><button onClick={closeModal}>x</button></Modal>


  </div>

};

export default Explore;
