import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { COLOR_THEME, RESPONSIVE_THEME } from '../config';
import { COLOR_SET, SCALE_SET } from '../theme-config';

type PaperElement = 'div' | 'main' | 'section' | 'article' | 'header' | 'footer' | 'aside';
type PaperDefaultColors = keyof typeof COLOR_SET.fill.default;
type PaperHoverColors = keyof typeof COLOR_SET.fill.hover;

type PaperProps<T extends PaperElement> = {
  bgColor?: PaperDefaultColors;
  bgHoverColor?: PaperHoverColors;
  bgGlassy?: boolean;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Paper = <T extends PaperElement>(props: PaperProps<T>) => {
  const { as, bgColor, bgHoverColor, bgGlassy, className, ...restProps } = props;
  const Component = as ?? 'div';

  const classes = classNames(
    bgColor && COLOR_SET.fill.default[bgColor],

    bgHoverColor && COLOR_SET.fill.hover[bgHoverColor],
    bgGlassy && 'isolate bg-opacity-40  backdrop-blur-lg',
    bgGlassy && bgHoverColor && 'hover:bg-opacity-10 group-hover:bg-opacity-10 ',

    // COLOR_THEME.fill.base,
    // RESPONSIVE_THEME.px,
    // RESPONSIVE_THEME.py,
    'rounded-lg ',
    className,
  );

  return (
    <Component {...restProps} className={classes}>
      {restProps.children}
    </Component>
  );
};

export default Paper;
