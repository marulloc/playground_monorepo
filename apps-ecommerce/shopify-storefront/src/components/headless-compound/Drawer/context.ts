'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type DrawerContextValue = {
  isOpen: boolean;
  anchor: 'top' | 'left' | 'bottom' | 'right';
  open: () => void;
  close: () => void;
};
export type DrawerContextType = [DrawerContextValue, Dispatch<SetStateAction<DrawerContextValue>>];

export const DrawerContext = createContext<DrawerContextType | null>(null);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('<Drawer.*> component must be rendered as child of <Drawer> component');
  }

  return context;
};
