'use client';

import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { classNames } from '@/styles/utils';

/**
 *
 *
 *
 */
export type DrawerContextType = {
  isOpen: boolean;
  anchor: 'top' | 'left' | 'bottom' | 'right';
  openDrawer: () => void;
  closeDrawer: () => void;
};

export const DrawerContext = createContext<DrawerContextType | null>(null);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);

  if (!context) throw new Error('<Drawer.*> component must be rendered as child of <Drawer> component');
  return context;
};

/**
 *
 *
 *
 *
 */
type DrawerRootProps = {
  children: React.ReactNode;
} & Pick<DrawerContextType, 'anchor'>;

const DrawerRoot = ({ anchor, children }: DrawerRootProps) => {
  const [context, setContext] = useState<DrawerContextType>({
    isOpen: false,
    anchor,
    openDrawer: () => {},
    closeDrawer: () => {},
  });
  useEffect(() => setContext((context) => ({ ...context, anchor })), [anchor]);

  const openDrawer = useCallback(() => setContext((context) => ({ ...context, isOpen: true })), []);
  const closeDrawer = useCallback(() => setContext((context) => ({ ...context, isOpen: false })), []);

  return <DrawerContext.Provider value={{ ...context, openDrawer, closeDrawer }}>{children}</DrawerContext.Provider>;
};

/**
 *
 *
 *
 */
type DrawerContentsProps<T extends React.ElementType = 'aside'> = {
  children: (props: DrawerContextType) => React.ReactNode;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const DrawerContents = <T extends React.ElementType = 'aside'>({
  children,
  as,
  className,
  ...rest
}: DrawerContentsProps<T>) => {
  const { isOpen, anchor, closeDrawer, openDrawer } = useDrawerContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const classNameWithAnchor = useMemo(() => {
    switch (anchor) {
      case 'top':
        return classNames(
          'top-0 left-0 right-0 ',
          'w-screen overflow-x-auto overflow-y-auto',
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-full opacity-0',
        );

      case 'left':
        return classNames(
          'left-0 top-0 bottom-0',
          'h-screen overflow-y-auto',
          isOpen ? 'visible translate-x-0 opacity-100' : 'invisible -translate-x-full opacity-0',
        );

      case 'bottom':
        return classNames(
          'bottom-0 left-0 right-0',
          'w-screen overflow-x-auto overflow-y-auto',
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-full opacity-0',
        );

      case 'right':
        return classNames(
          'right-0 top-0 bottom-0',
          'h-screen overflow-y-auto',
          isOpen ? 'visible translate-x-0 opacity-100' : 'invisible translate-x-full opacity-0',
        );
    }
  }, [anchor, isOpen]);

  if (!isMounted) return null;

  const Component = as ?? 'aside';

  return ReactDOM.createPortal(
    <Component
      {...rest}
      className={classNames(
        'fixed z-40 transition-all transform duration-300 ease-in-out',
        classNameWithAnchor,
        className,
      )}
    >
      {children({ isOpen, anchor, closeDrawer, openDrawer })}
    </Component>,
    document.getElementById('drawer-root')!,
  );
};
/**
 *
 *
 *
 *
 *
 */

type DrawerBackdropProps<T extends React.ElementType = 'div'> = {
  children: (props: DrawerContextType) => React.ReactNode;
  preventScroll?: boolean;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;
const DrawerBackdrop = <T extends React.ElementType = 'div'>({
  as,
  children,
  preventScroll = true,
  className,
  ...rest
}: DrawerBackdropProps<T>) => {
  const { isOpen, closeDrawer, ...restContext } = useDrawerContext();
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
      onClick={() => closeDrawer()}
    >
      {children({ ...restContext, isOpen, closeDrawer })}
    </Component>,
    document.getElementById('drawer-root')!,
  );
};

/**
 *
 *
 *
 *
 */
type DrawerTriggerProps<T extends React.ElementType = typeof React.Fragment> = {
  children: (props: DrawerContextType) => React.ReactNode;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;
const DrawerTrigger = <T extends React.ElementType = typeof React.Fragment>({
  as,
  children,
  ...rest
}: DrawerTriggerProps<T>) => {
  const context = useDrawerContext();

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
export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Contents: DrawerContents,
  Backdrop: DrawerBackdrop,
});
