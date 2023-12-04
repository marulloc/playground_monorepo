import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import COLOR_THEME from '../color-theme';

type PaperElement = 'div' | 'main' | 'section' | 'article' | 'header' | 'footer' | 'aside';
type PaperDefaultColors = keyof typeof COLOR_THEME.fill;
type PaperHoverColors = keyof typeof COLOR_THEME.fill;

type PaperProps<T extends PaperElement> = {
  background?: PaperDefaultColors;
  backgroundHover?: PaperHoverColors;

  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Paper = <T extends PaperElement>(props: PaperProps<T>) => {
  const { as, background, backgroundHover, className, ...restProps } = props;

  const Component = as ?? 'div';
  const classes = classNames(
    'isolate',
    background && COLOR_THEME.fill[background].default,
    backgroundHover && COLOR_THEME.fill[backgroundHover].hover,

    className,
  );

  return (
    <Component {...restProps} className={classes}>
      {restProps.children}
    </Component>
  );
};

export default Paper;
