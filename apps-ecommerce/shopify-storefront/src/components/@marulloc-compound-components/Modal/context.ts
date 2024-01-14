'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type ModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};
export type ModalContextType = [ModalContextValue, Dispatch<SetStateAction<ModalContextValue>>];

export const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('<Modal.*> component must be rendered as child of <Modal> component');
  }

  return context;
};
