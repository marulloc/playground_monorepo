'use client';

import { Fragment } from 'react';
import { DrawerContextValue, useDrawerContext } from './context';

type DrawerTriggerChildren = (props: {
  isOpen: DrawerContextValue['isOpen'];
  open: DrawerContextValue['open'];
}) => React.ReactNode;

type Props<T extends React.ElementType = typeof Fragment> = {
  children: DrawerTriggerChildren;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const DrawerTrigger = <T extends React.ElementType = typeof Fragment>({ as, children, ...rest }: Props<T>) => {
  const [context] = useDrawerContext();

  const Component = as ?? Fragment;
  return <Component {...rest}>{children({ isOpen: context.isOpen, open: context.open })}</Component>;
};

export default DrawerTrigger;
