'use client';

import { useMemo } from 'react';
import { ModalContextValue, useModalContext } from './context';
import { classNames } from '@/styles/utils';

type Props<T extends React.ElementType = 'div'> = {
  children: (props: ModalContextValue) => React.ReactNode;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const ModalContents = <T extends React.ElementType = 'div'>({ as, children, className, ...rest }: Props<T>) => {
  const [{ isOpen, close, ...restContext }] = useModalContext();

  const defaultStyle = classNames('fixed z-30', 'transition-all transform duration-300 ease-in-out');

  const Component = as ?? 'div';
  return (
    <Component {...rest} className={classNames(defaultStyle, className)}>
      {children({ isOpen, close, ...restContext })}
    </Component>
  );
};

export default ModalContents;
