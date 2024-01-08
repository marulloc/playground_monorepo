'use client';

import { useCallback, useEffect, useState } from 'react';
import { DrawerContext, DrawerContextValue } from './context';

type Props = {
  defaultOpen?: boolean;
  children: React.ReactNode;
} & Pick<DrawerContextValue, 'anchor'>;

const DrawerRoot = ({ anchor, defaultOpen, children }: Props) => {
  const [contextState, setContextState] = useState<DrawerContextValue>({
    anchor,
    isOpen: defaultOpen || false,
    open: () => {},
    close: () => {},
  });

  useEffect(() => {
    setContextState((context) => ({ ...context, anchor, defaultOpen }));
  }, [anchor, defaultOpen]);

  useEffect(() => {
    if (contextState.isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [contextState.isOpen]);

  const open = useCallback(() => setContextState((context) => ({ ...context, isOpen: true })), []);
  const close = useCallback(() => setContextState((context) => ({ ...context, isOpen: false })), []);

  return (
    <DrawerContext.Provider value={[{ ...contextState, open, close }, setContextState]}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerRoot;
