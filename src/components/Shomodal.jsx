import React, { useState } from 'react';
import Modal from './Shomodal';

function Shomodal() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Afficher le modal</button>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default Shomodal;
