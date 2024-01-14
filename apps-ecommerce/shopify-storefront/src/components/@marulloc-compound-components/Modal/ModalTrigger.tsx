'use client';

import { Fragment } from 'react';
import { ModalContextValue, useModalContext } from './context';

type Props<T extends React.ElementType = typeof Fragment> = {
  children: (props: ModalContextValue) => React.ReactNode;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const ModalTrigger = <T extends React.ElementType = typeof Fragment>({ as, children, ...rest }: Props<T>) => {
  const [context] = useModalContext();

  const Component = as ?? Fragment;
  return <Component {...rest}>{children({ ...context })}</Component>;
};

export default ModalTrigger;
