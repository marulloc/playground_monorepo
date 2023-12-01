import { classNames } from '@/components/Marulloc-UI/utils/classNames';

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
    'isolate',
    bgColor && COLOR_SET.fill.default[bgColor],

    bgHoverColor && COLOR_SET.fill.hover[bgHoverColor],
    bgGlassy && 'bg-opacity-40  backdrop-blur-lg',
    bgGlassy && bgHoverColor && 'hover:bg-opacity-10 group-hover:bg-opacity-10 ',

    // 'rounded-lg ',
    className,
  );

  return (
    <Component {...restProps} className={classes}>
      {restProps.children}
    </Component>
  );
};

export default Paper;
const COLOR_SET = {
  fill: {
    default: {
      base: classNames('bg-zinc-700'), // base(primary) bg color
      muted: classNames('bg-zinc-500'),
      accent: classNames('bg-pink-600'), // inverted from base(primary) bg color
      disabled: '', // disabled bg color
    },

    hover: {
      base: classNames('hover:bg-zinc-600 group-hover:bg-zinc-600'),
      muted: classNames('hover:bg-zinc-300 group-hover:bg-zinc-300'),
      accent: classNames('hover:bg-pink-400 group-hover:bg-pink-400'),
    },
  },

  border: {
    base: '',
    muted: '',
    inverted: '',
    disabled: '',
  },
};
