'use client';

import { classNames } from '@/styles/utils';
import { MutableRefObject, createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export type DropdownContextType = {
  isOpen: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  triggerId: string;
  dropdownId: string;
};

export const DropdownContext = createContext<DropdownContextType | null>(null);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);

  if (!context) throw new Error('<Dropdown.*> component must be rendered as child of <Dropdown> component');
  return context;
};

/**
 *
 *
 *
 *
 *
 */

type DropdownRootProps = {
  id: string;
  children: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
};
const DropdownRoot = ({ children, onClose, onOpen, id }: DropdownRootProps) => {
  const [context, setContext] = useState<DropdownContextType>({
    isOpen: false,
    openDropdown: () => {},
    closeDropdown: () => {},
    dropdownId: `dropdown-id-${id}`,
    triggerId: `trigger-id-${id}`,
  });

  const openDropdown = useCallback(() => {
    setContext((context) => ({ ...context, isOpen: true }));
    if (onOpen) onOpen();
  }, [onOpen]);
  const closeDropdown = useCallback(() => {
    setContext((context) => ({ ...context, isOpen: false }));
    if (onClose) onClose();
  }, [onClose]);

  useEffect(() => {
    const dropdown = document.getElementById(context.dropdownId);
    const trigger = document.getElementById(context.triggerId);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdown && trigger && !dropdown.contains(event.target as Node) && !trigger.contains(event.target as Node)) {
        setContext((context) => ({ ...context, isOpen: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [context]);

  return (
    <DropdownContext.Provider
      value={{
        ...context,
        openDropdown,
        closeDropdown,
      }}
    >
      <div>{children}</div>
    </DropdownContext.Provider>
  );
};

/**
 *
 *
 *
 *
 *
 */
type DropdownContentsProps = {
  children: (props: DropdownContextType) => React.ReactNode;
  matchTriggerWidth?: boolean;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'id'>;

const DropdownContents = ({ children, className, matchTriggerWidth = true, ...rest }: DropdownContentsProps) => {
  const { isOpen, dropdownId, triggerId, ...restContext } = useDropdownContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      const dropdown = document.getElementById(dropdownId);
      const trigger = document.getElementById(triggerId);

      if (!dropdown || !trigger) return;

      const triggerRect = trigger.getBoundingClientRect();
      const dropdownHeight = dropdown.offsetHeight;
      const spaceBelow = window.innerHeight - triggerRect.bottom;

      if (spaceBelow < dropdownHeight && triggerRect.top > dropdownHeight) {
        // 현재 뷰포트보다 드롭다운의 높이가 클 경우에
        dropdown.style.top = `${triggerRect.top - dropdownHeight + window.scrollY}px`;
      } else {
        dropdown.style.top = `${triggerRect.bottom + window.scrollY}px`;
      }

      dropdown.style.left = `${triggerRect.left + window.scrollX}px`;
      if (matchTriggerWidth) dropdown.style.width = `${triggerRect.width}px`;
    };
    if (isOpen) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
    }

    return () => window.removeEventListener('resize', updatePosition);
  }, [dropdownId, isOpen, matchTriggerWidth, triggerId]);

  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <div
      {...rest}
      id={dropdownId}
      className={classNames(
        'absolute   transition-all duration-300 ease-out  ',
        isOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-4',
        className,
      )}
    >
      <>{children({ dropdownId, triggerId, isOpen, ...restContext })}</>
    </div>,
    document.body,
  );
};

/**
 *
 *
 *
 *
 */
type DropdownTriggerProps = {
  children: (props: DropdownContextType) => React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'id'>;

const DropdownTrigger = ({ children, ...rest }: DropdownTriggerProps) => {
  const { openDropdown, triggerId, ...context } = useDropdownContext();

  return (
    <div {...rest} id={triggerId} onClick={() => openDropdown()}>
      <>{children({ openDropdown, triggerId, ...context })}</>
    </div>
  );
};

/**
 *
 *
 *
 *
 *
 *
 */
export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Contents: DropdownContents,
});
