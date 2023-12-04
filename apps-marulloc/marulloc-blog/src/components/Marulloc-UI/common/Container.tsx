// import { SpacingMaxWidthLevels } from '../spacing-theme';
import { classNames } from '../utils/classNames';

type ContainerElement = 'div' | 'main' | 'section' | 'article' | 'header' | 'footer' | 'aside';

type ContainerProps<T extends ContainerElement> = {
  centered?: 'x' | 'y' | 'xy' | false;
  maxWidth?: 'max-w-full' | 'max-w-7xl' | 'max-w-6xl' | 'max-w-5xl';

  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Container = <T extends ContainerElement>(props: ContainerProps<T>) => {
  const { as, maxWidth = 'max-w-7xl', className, ...restProps } = props;

  const Component = as ?? 'div';
  const classes = classNames(className);

  return (
    <div className={classNames(maxWidth, 'mx-auto left-0 right-0 w-full')}>
      <Component {...restProps} className={classes}>
        {restProps.children}
      </Component>
    </div>
  );
};

export default Container;
