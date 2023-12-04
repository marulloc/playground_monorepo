import COLOR_THEME from '../color-theme';
import FONT_THEME from '../font-theme';
import { classNames } from '../utils/classNames';

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'code';
type TypographySize = keyof typeof FONT_THEME;
type TypographyDefaultColors = keyof typeof COLOR_THEME.text;
type TypographyHoverColors = keyof typeof COLOR_THEME.text; // true거나 찝거나

type TypographyProps<T extends TypographyElement> = {
  size?: TypographySize;
  responsive?: boolean; //=> scale이 있을때만 유효함
  color?: TypographyDefaultColors;
  hover?: TypographyHoverColors;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Typography = <T extends TypographyElement>(props: TypographyProps<T>) => {
  const { size, responsive = true, color, hover, as, className, ...restProps } = props;

  const Component = as ?? 'span';
  const classes = classNames(
    size && FONT_THEME[size].default,
    size && responsive && FONT_THEME[size].responsive,

    color && COLOR_THEME.text[color].default,
    hover && COLOR_THEME.text[hover].hover,

    'space-x-2',
    className,
  );

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
