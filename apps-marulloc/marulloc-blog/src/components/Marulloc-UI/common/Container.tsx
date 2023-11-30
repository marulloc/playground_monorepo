import { RESPONSIVE_THEME } from '../config';
import { classNames } from '../utils/classNames';

type ContainerElement = 'div' | 'main' | 'section' | 'article' | 'header' | 'footer' | 'aside';

type ContainerProps<T extends ContainerElement> = {
  centered?: 'x' | 'y' | 'xy';
  fixed?: boolean;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Container = <T extends ContainerElement>(props: ContainerProps<T>) => {
  const { as, centered = 'x', fixed, className, ...restProps } = props;

  const Component = as ?? 'div';
  const classes = classNames(
    ' max-w-7xl',
    ' w-full',

    fixed && 'fixed z-10 ',
    centered === 'x' && 'mx-auto left-0 right-0',
    centered === 'y' && 'my-auto top-0 bottom-0',
    centered === 'xy' && 'mx-auto my-auto left-0 right-0  top-0 bottom-0',

    // RESPONSIVE_THEME.px,
    // py && RESPONSIVE_THEME.py,
    className,
  );

  return (
    <Component {...restProps} className={classes}>
      {restProps.children}
    </Component>
  );
};

export default Container;
