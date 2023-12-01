import { classNames } from '../utils/classNames';

type ContainerElement = 'div' | 'main' | 'section' | 'article' | 'header' | 'footer' | 'aside';
type ConatinerLevel = 'max-w-5xl' | 'max-w-6xl' | 'max-w-7xl' | 'max-w-full';

type ContainerProps<T extends ContainerElement> = {
  centered?: 'x' | 'y' | 'xy' | false;
  maxWidth?: ConatinerLevel;
  as?: T;
} & React.ComponentPropsWithoutRef<T>; //&  SpacingScales;

const Container = <T extends ContainerElement>(props: ContainerProps<T>) => {
  const { as, maxWidth = 'max-w-7xl', className, ...restProps } = props;

  const Component = as ?? 'div';
  const classes = classNames(maxWidth, 'mx-auto  w-full left-0 right-0', className);

  return (
    <div className="">
      <Component {...restProps} className={classes}>
        {restProps.children}
      </Component>
    </div>
  );
};

export default Container;
