import { classNames } from '../utils/classNames';

type ContainerProps<T extends React.ElementType> = {
  children?: React.ReactNode;
  as?: T;
  defaultProps?: Omit<React.ComponentPropsWithoutRef<T>, 'children'>;
};

const Container = <T extends React.ElementType>({ children, as, defaultProps }: ContainerProps<T>) => {
  const Component = as ?? 'div';
  const defaultClassName = classNames('p-6');

  return (
    <Component {...defaultProps} className={classNames(defaultClassName, defaultProps?.className)}>
      {children}
    </Component>
  );
};

export default Container;
