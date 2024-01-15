'use client';

import { classNames } from '@/styles/utils';
import { useModalContext } from './context';
import { useMemo } from 'react';

type Props<T extends React.ElementType = 'div'> = {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const ModalBackdrop = ({ as, className, ...rest }: Props) => {
  const [{ isOpen, close }, setContext] = useModalContext();

  const defaultStyle = classNames(
    isOpen ? ' duration-200  opacity-100' : ' duration-300 opacity-0 - ',
    'bg-zinc-700 bg-opacity-30 backdrop-blur-sm backdrop',
  ); //=> 스타일을 칠드런으로 빼는 것도 생각해봐

  const requiredStyle = classNames(
    'fixed top-0 left-0 w-screen h-screen',
    'transition-all',

    'z-40 ',
    isOpen ? ' visible opacity-100  ' : ' invisible opacity-0  ',
  );

  const Component = as ?? 'div';
  return (
    <Component
      {...rest}
      className={classNames(defaultStyle, className, requiredStyle)}
      onClick={(e: any) => {
        setContext((context) => ({ ...context, isOpen: false }));
      }}
    >
      <div className={classNames('w-screen h-screen ', isOpen ? 'block' : 'hidden')} onClick={() => close()} />
    </Component>
  );
};

export default ModalBackdrop;
