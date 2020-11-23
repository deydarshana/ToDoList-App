import React from 'react';
import Modal from 'react-modal';

const Practical2 = () => {
  return(
      <>
      <div className="text-center">
      <button>Open Model</button>
          <Modal isOpen={true}>
              <h2>Modal Title</h2>
              <p>Modal Body</p>
          </Modal>
      </div>

      </>
  );
}

export default Practical2;