'use client';

import { useMemo } from 'react';
import { DrawerContextValue, useDrawerContext } from './context';
import { classNames } from '@/styles/utils';

type DrawerContentsChildren = (props: {
  isOpen: DrawerContextValue['isOpen'];
  close: DrawerContextValue['close'];
}) => React.ReactNode;

type Props<T extends React.ElementType = 'aside'> = {
  children: DrawerContentsChildren;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const DrawerContents = <T extends React.ElementType = 'aside'>({ as, children, className, ...rest }: Props<T>) => {
  const [{ anchor, isOpen, close }] = useDrawerContext();

  const defaultStyle = classNames('fixed z-50', 'transition-all transform duration-300 ease-in-out');

  const styleWithAnchor = useMemo(() => {
    switch (anchor) {
      case 'top':
        return classNames(
          'top-0 left-0 right-0 ',
          'w-screen overflow-x-auto overflow-y-auto',
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
        );

      case 'left':
        return classNames(
          'left-0 top-0 bottom-0',
          'h-screen overflow-y-auto',
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0',
        );

      case 'bottom':
        return classNames(
          'bottom-0 left-0 right-0',
          'w-screen overflow-x-auto overflow-y-auto',
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
        );

      case 'right':
        return classNames(
          'right-0 top-0 bottom-0',
          'h-screen overflow-y-auto',
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
        );
    }
  }, [anchor, isOpen]);

  const Component = as ?? 'aside';
  return (
    <Component {...rest} className={classNames(defaultStyle, styleWithAnchor, className)}>
      {children({ isOpen: isOpen, close: close })}
    </Component>
  );
};

export default DrawerContents;
