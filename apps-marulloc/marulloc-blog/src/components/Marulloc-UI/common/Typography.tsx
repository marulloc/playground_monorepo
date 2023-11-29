import { COLOR_THEME, RESPONSIVE_THEME } from '../config';
import { classNames } from '../utils/classNames';

type TypographyProps<T extends React.ElementType> = {
  color?: 'base' | 'muted' | 'accent' | 'disabled';
  hover?: 'base' | 'muted' | 'accent';
  variant?: 'span' | 'p' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'code';
  as?: 'span' | 'p' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'code';
  children?: React.ReactNode;
  defaultProps?: Omit<React.ComponentPropsWithoutRef<T>, 'children'>;
};

const Typography = <T extends React.ElementType>({
  color = 'muted',
  variant = 'span',
  hover,
  children,
  as,
  defaultProps,
}: TypographyProps<T>) => {
  const Component = as ?? variant ?? 'span';

  const classes = classNames(
    RESPONSIVE_THEME.Typography[variant],
    COLOR_THEME.text[color],
    hover && COLOR_THEME.text[`${hover}_hover`],

    defaultProps?.className,
  );

  return (
    <Component {...defaultProps} className={classes}>
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant) && <span className="sr-only">{children}</span>}
      {children}
    </Component>
  );
};

export default Typography;
