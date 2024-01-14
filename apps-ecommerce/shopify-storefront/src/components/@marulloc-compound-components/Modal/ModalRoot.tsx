'use client';

import { useCallback, useEffect, useState } from 'react';
import { ModalContext, ModalContextValue } from './context';

type Props = {
  defaultOpen?: boolean;
  children: React.ReactNode;
};

const ModalRoot = ({ defaultOpen, children }: Props) => {
  const [contextState, setContextState] = useState<ModalContextValue>({
    isOpen: defaultOpen || false,
    open: () => {},
    close: () => {},
  });

  useEffect(() => {
    setContextState((context) => ({ ...context, defaultOpen }));
  }, [defaultOpen]);

  useEffect(() => {
    if (contextState.isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [contextState.isOpen]);

  const open = useCallback(() => setContextState((context) => ({ ...context, isOpen: true })), []);
  const close = useCallback(() => setContextState((context) => ({ ...context, isOpen: false })), []);

  return (
    <ModalContext.Provider value={[{ ...contextState, open, close }, setContextState]}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalRoot;
