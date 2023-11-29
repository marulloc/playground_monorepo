import { RESPONSIVE_THEME } from '../config';
import { classNames } from '../utils/classNames';

type ContainerProps<T extends React.ElementType> = {
  py?: boolean;
  children?: React.ReactNode;
  as?: T;
  defaultProps?: Omit<React.ComponentPropsWithoutRef<T>, 'className'>;
};

const Container = <T extends React.ElementType>({ children, as, py, defaultProps }: ContainerProps<T>) => {
  const Component = as ?? 'div';
  const classes = classNames(
    'mx-auto max-w-7xl ',
    RESPONSIVE_THEME.px,
    py && RESPONSIVE_THEME.py,
    defaultProps?.className,
  );

  return (
    <Component {...defaultProps} className={classes}>
      {children}
    </Component>
  );
};

export default Container;
