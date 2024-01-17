'use client';

import React, { useState, useRef, useEffect, ReactNode, FC } from 'react';
import ReactDOM from 'react-dom';
import './dropdown-style.css';

interface DropdownProps {
  children: ReactNode;
  trigger: ReactNode;
}

const Dropdown: FC<DropdownProps> & {
  Content: FC<{}>;
} = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateDropdownPosition() {
      if (!dropdownRef.current || !triggerRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      dropdownRef.current.style.top = `${triggerRect.bottom + window.scrollY}px`;
      dropdownRef.current.style.left = `${triggerRect.left + window.scrollX}px`;
      dropdownRef.current.style.width = `${triggerRect.width}px`;
    }

    if (isOpen) {
      updateDropdownPosition();
      window.addEventListener('resize', updateDropdownPosition);
    }

    return () => window.removeEventListener('resize', updateDropdownPosition);
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        triggerRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef, triggerRef]);

  return (
    <>
      <div ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen &&
        ReactDOM.createPortal(
          <div ref={dropdownRef} className={`dropdown-enter absolute z-50`}>
            <Dropdown.Content>{children}</Dropdown.Content>
          </div>,
          document.body,
        )}
    </>
  );
};

Dropdown.Content = ({ children }) => <div className="bg-white shadow-lg rounded-lg p-4">{children}</div>;

export default Dropdown;
