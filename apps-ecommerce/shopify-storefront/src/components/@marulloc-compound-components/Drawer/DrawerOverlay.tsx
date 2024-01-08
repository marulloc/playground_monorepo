'use client';

import { classNames } from '@/styles/utils';
import { useDrawerContext } from './context';
import { useMemo } from 'react';

type Props<T extends React.ElementType = 'div'> = {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const DrawerOverlay = ({ as, className, ...rest }: Props) => {
  const [{ isOpen, close }] = useDrawerContext();

  const classes = useMemo(() => {
    return classNames(
      'fixed top-0 w-screen h-screen max-h-screen overscroll-none', // Default Style
      'transform transition-opacity ease-in-out', // Overlay Animation
      isOpen ? 'opacity-100  z-20' : ' transition-all delay-200 duration-800 opacity-0 -z-50', // Overlay Animation

      'dark:bg-black dark:bg-opacity-50 bg-white bg-opacity-50', // Default color
      className,
    );
  }, [className, isOpen]);

  const Component = as ?? 'div';
  return (
    <Component className={classes}>
      <div className={classNames('w-screen h-screen ', isOpen ? 'block' : 'hidden')} onClick={() => close()} />
    </Component>
  );
};

export default DrawerOverlay;
