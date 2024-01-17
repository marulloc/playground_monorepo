'use client';

import { useState } from 'react';
import Modal from './ModalRoot';

const ModalTrigger = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
        Open Modal
      </button>
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <Modal.Content>
            <h2>Modal Title</h2>
            <p>Modal content goes here.</p>
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
};

export default ModalTrigger;
