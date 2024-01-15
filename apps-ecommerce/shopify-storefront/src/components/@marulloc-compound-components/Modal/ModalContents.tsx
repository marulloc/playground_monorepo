'use client';

import { ModalContextValue, useModalContext } from './context';
import { classNames } from '@/styles/utils';

type Props<T extends React.ElementType = 'div'> = {
  children: (props: ModalContextValue) => React.ReactNode;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const ModalContents = <T extends React.ElementType = 'div'>({ as, children, className, ...rest }: Props<T>) => {
  const [{ isOpen, close, ...restContext }, setContext] = useModalContext();

  const defaultStyle = classNames(isOpen ? 'delay-200 duration-1000 opacity-100' : 'delay-0  duration-1000');
  const requiredStyle = classNames(
    'fixed z-50 ',
    'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'w-full h-full flex justify-center items-center',
    'overflow-hidden',

    'transition-all ease-in-out',
    isOpen ? 'visible opacity-100  ' : 'invisible opacity-0',
  );

  const Component = as ?? 'div';
  return (
    <Component
      {...rest}
      id="dialog-wrapper"
      className={classNames(defaultStyle, className, requiredStyle)}
      onClick={(e: any) => {
        if (e.target?.id === 'dialog-wrapper') setContext((context) => ({ ...context, isOpen: false }));
      }}
    >
      {children({ isOpen, close, ...restContext })}
    </Component>
  );
};

export default ModalContents;
