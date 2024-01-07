'use client';

import { Fragment } from 'react';
import { DrawerContextValue, useDrawerContext } from './context';

type Props<T extends React.ElementType = typeof Fragment> = {
  children: (props: DrawerContextValue) => React.ReactNode;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const DrawerTrigger = <T extends React.ElementType = typeof Fragment>({ as, children, ...rest }: Props<T>) => {
  const [context] = useDrawerContext();

  const Component = as ?? Fragment;
  return <Component {...rest}>{children({ ...context })}</Component>;
};

export default DrawerTrigger;
