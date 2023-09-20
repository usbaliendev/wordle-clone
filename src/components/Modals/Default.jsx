// Modal.js
import React, { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>
              &times;
            </span>
            {/* Add your modal content here */}
            <p>This is a simple modal.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
