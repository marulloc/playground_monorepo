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

const SCALE_SET = {
  text: {
    h1: classNames('text-4xl md:text-5xl lg:text-6xl', 'font-bold'),
    h2: classNames('text-3xl md:text-4xl lg:text-5xl', 'font-bold'),
    h3: classNames('text-2xl md:text-3xl lg:text-4xl', 'font-bold'),
    h4: classNames('text-xl md:text-2xl lg:text-3xl', 'font-semibold'),
    h5: classNames('text-lg md:text-xl lg:text-2xl', 'font-semibold'),
    h6: classNames('text-base md:text-lg lg:text-xl', 'font-semibold'),
    body1: classNames('text-base md:text-lg'),
    body2: classNames('text-sm md:text-base '),
    caption: classNames('text-xs md:text-sm '),
  },
};
const COLOR_SET = {
  text: {
    default: {
      base: classNames('text-zinc-200'), // base(primary) text color
      muted: classNames('text-zinc-400'), // muted color from base(primary) text color
      accent: classNames('text-pink-600'), // inverted from base(primary) text color
      disabled: classNames('text-zinc-600'),
    },

    hover: {
      base: classNames('hover:text-zinc-50 group-hover:text-zinc-50'),
      muted: classNames('hover:text-zinc-200 group-hover:text-zinc-200'),
      accent: classNames('hover:text-pink-400 group-hover:text-pink-400'),
    },
  },
};
