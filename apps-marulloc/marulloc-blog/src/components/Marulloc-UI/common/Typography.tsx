import { COLOR_THEME, RESPONSIVE_THEME } from '../config';
import { COLOR_SET, SCALE_SET } from '../theme-config';
import { classNames } from '../utils/classNames';

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'code';
type TypographyScales = keyof typeof SCALE_SET.text;
type TypographyDefaultColors = keyof typeof COLOR_SET.text.default;
type TypographyHoverColors = keyof typeof COLOR_SET.text.hover;

type TypographyProps<T extends TypographyElement> = {
  scale?: TypographyScales;
  color?: TypographyDefaultColors;
  hover?: TypographyHoverColors;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Typography = <T extends TypographyElement>(props: TypographyProps<T>) => {
  const { color, scale, hover, as, className, ...restProps } = props;

  const classes = classNames(
    scale && SCALE_SET.text[scale],
    color && COLOR_SET.text.default[color],
    hover && COLOR_SET.text.hover[hover],
    'space-x-2',
    className,
  );

  const Component = as ?? 'span';
  return (
    <Component {...restProps} className={classes}>
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(Component) && (
        <span className="sr-only"> {restProps.children}</span>
      )}

      {restProps.children}
    </Component>
  );
};

export default Typography;
