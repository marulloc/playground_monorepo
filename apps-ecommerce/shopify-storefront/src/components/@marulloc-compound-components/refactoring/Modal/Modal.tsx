'use client';

import { classNames } from '@/styles/utils';
import React from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/**
 *
 * @returns
 *
 *
 */
export type ModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error('<Modal.*> component must be rendered as child of <Modal> component');
  return context;
};

/**
 *
 * @returns
 *
 *
 *
 */

type ModalRootProps = {
  children: React.ReactNode;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

const ModalRoot = ({ children, open, onClose, onOpen }: ModalRootProps) => {
  const [context, setContext] = useState<ModalContextType>({
    isOpen: open || false,
    openModal: () => {},
    closeModal: () => {},
  });

  useEffect(() => {
    setContext((context) => {
      if (open === undefined) return { ...context };
      return { ...context, isOpen: open };
    });
  }, [open]);

  const openModal = useCallback(() => {
    setContext((context) => ({ ...context, isOpen: true }));
    if (onOpen) onOpen();
  }, [onOpen]);
  const closeModal = useCallback(() => {
    setContext((context) => ({ ...context, isOpen: false }));
    if (onClose) onClose();
  }, [onClose]);

  return (
    <ModalContext.Provider value={{ ...context, openModal, closeModal }}>
      <>{children}</>
    </ModalContext.Provider>
  );
};

/**
 *
 *
 *
 *
 */

type ModalContentsProps<T extends React.ElementType = 'div'> = {
  children: (props: ModalContextType) => React.ReactNode;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const ModalContents = <T extends React.ElementType = 'div'>({
  children,
  as,
  className,
  ...rest
}: ModalContentsProps<T>) => {
  const { isOpen, openModal, closeModal } = useModalContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const Component = as ?? 'div';
  return ReactDOM.createPortal(
    <Component
      {...rest}
      id="modal-contents-wrapper"
      className={classNames(
        'fixed inset-0 z-40',
        'transition-all transform duration-300 ease-in-out',
        isOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-4',
      )}
      onClick={(e: any) => {
        if (e.target.id === 'modal-contents-wrapper') closeModal();
      }}
    >
      <>{children({ isOpen, openModal, closeModal })}</>
    </Component>,
    document.getElementById('modal-root')!,
  );
};

/**
 *
 *
 *
 *
 *
 */

type ModalBackdropProps<T extends React.ElementType = 'div'> = {
  children: (props: ModalContextType) => React.ReactNode;
  preventScroll?: boolean;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const ModalBackdrop = <T extends React.ElementType = 'div'>({
  children,
  preventScroll,
  as,
  className,
  ...rest
}: ModalBackdropProps<T>) => {
  const { isOpen, openModal, closeModal } = useModalContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isOpen]);

  if (!isMounted) return null;

  const Component = as ?? 'div';
  return ReactDOM.createPortal(
    <Component
      {...rest}
      className={classNames(
        'fixed z-30 top-0 left-0 w-screen h-screen transition-all transform duration-300 ease-in-out ',
        isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        className,
      )}
      onClick={(e: any) => {
        closeModal();
      }}
    >
      {children({ isOpen, openModal, closeModal })}
    </Component>,
    document.getElementById('modal-root')!,
  );
};

/**
 *
 *
 *
 *
 *
 */

type ModalTriggerProps<T extends React.ElementType = typeof React.Fragment> = {
  children: (props: ModalContextType) => React.ReactNode;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const ModalTrigger = <T extends React.ElementType = typeof React.Fragment>({
  as,
  children,
  ...rest
}: ModalTriggerProps<T>) => {
  const context = useModalContext();

  const Component = as ?? React.Fragment;
  return <Component {...rest}>{children({ ...context })}</Component>;
};

/**
 *
 *
 *
 *
 *
 *
 */
export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Contents: ModalContents,
  Backdrop: ModalBackdrop,
});
