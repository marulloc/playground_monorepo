import { classNames } from '@/components/Marulloc-UI/utils/classNames';

type PaperProps<T extends React.ElementType> = {
  children?: React.ReactNode;
  as?: T;
  defaultProps?: Omit<React.ComponentPropsWithoutRef<T>, 'children'>;
};

const Paper = <T extends React.ElementType>({ children, as, defaultProps }: PaperProps<T>) => {
  const Component = as ?? 'div';
  const defaultClassName = classNames('bg-zinc-700 bg-opacity-40 backdrop-blur-lg rounded-lg ', 'overflow-hidden');

  return (
    <Component {...defaultProps} className={classNames(defaultClassName, defaultProps?.className)}>
      {children}
    </Component>
  );
};

export default Paper;
