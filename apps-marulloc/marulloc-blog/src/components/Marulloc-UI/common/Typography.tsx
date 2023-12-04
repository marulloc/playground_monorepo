import { ColorType, FontType, getColorTheme, getFontTheme } from '@/components/Marulloc-UI/theme/getTheme';
import { classNames } from '../utils/classNames';

type TypographyHeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TypographyInlineElement = 'span' | 'p' | 'code';
type TypographyElement = TypographyHeadingElement | TypographyInlineElement;

type TypographyProps<T extends TypographyElement> = {
  variants?: { size: FontType; responsive?: boolean };
  theme?: { color?: ColorType<'text'>; hoverColor?: ColorType<'text'> };
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Typography = <T extends TypographyElement>(props: TypographyProps<T>) => {
  const { as, className, variants, theme, ...restProps } = props;

  const Component = as ?? 'span';
  const classes = classNames(
    theme?.color && getColorTheme('text', [{ type: theme?.color, name: 'default' }]),
    theme?.hoverColor && getColorTheme('text', [{ type: theme?.hoverColor, name: 'hover' }]),

    variants?.size && getFontTheme([{ type: variants.size, name: 'default' }]),
    variants?.responsive && getFontTheme([{ type: variants.size, name: 'responsive' }]),

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
