/* eslint-disable react/display-name */

'use client';

import React, { useState, useEffect, ReactNode, FC } from 'react';
import ReactDOM from 'react-dom';
import './modal-style.css'; // CSS 모듈 임포트

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> & {
  Backdrop: FC<{ onClick: () => void }>;
  Content: FC<{}>;
} = ({ children, isOpen, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? 'modal-enter' : 'modal-exit'}`}>
      <Modal.Backdrop onClick={onClose} />
      <Modal.Content>{children}</Modal.Content>
    </div>,
    document.getElementById('modal-root')!,
  );
};

Modal.Backdrop = ({ onClick }) => <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClick} />;

Modal.Content = ({ children }: any) => (
  <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-24">{children}</div>
);

export default Modal;
