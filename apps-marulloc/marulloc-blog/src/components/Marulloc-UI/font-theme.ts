import { classNames } from './utils/classNames';

const FONT_THEME = {
  h1: classNames('text-4xl md:text-5xl lg:text-6xl', 'font-bold'),
  h2: classNames('text-3xl md:text-4xl lg:text-5xl', 'font-bold'),
  h3: classNames('text-2xl md:text-3xl lg:text-4xl', 'font-bold'),
  h4: classNames('text-xl md:text-2xl lg:text-3xl', 'font-semibold'),
  h5: classNames('text-lg md:text-xl lg:text-2xl', 'font-semibold'),
  h6: classNames('text-base md:text-lg lg:text-xl', 'font-semibold'),
  body1: classNames('text-base md:text-lg'),
  body2: classNames('text-sm md:text-base '),
  caption: classNames('text-xs md:text-sm '),
} as const;

// => 무조건 리스폰시브 박지 말고 ;;
