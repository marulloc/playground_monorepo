'use client';

import React, { useState, useEffect, ReactNode, FC } from 'react';
import ReactDOM from 'react-dom';
import './drawer-style.css'; // CSS 모듈 임포트

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: FC<DrawerProps> & {
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
    <div className={`fixed inset-0 z-40 overflow-hidden ${isOpen ? 'drawer-open' : 'drawer-close'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute left-0 top-0 bottom-0 w-64 bg-white p-4 shadow-xl">
        <Drawer.Content>{children}</Drawer.Content>
      </div>
    </div>,
    document.getElementById('drawer-root')!,
  );
};

Drawer.Content = ({ children }) => <div>{children}</div>;

export default Drawer;
