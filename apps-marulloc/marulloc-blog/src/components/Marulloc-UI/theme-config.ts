import { classNames } from './utils/classNames';

export const SCALE_SET = {
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

  border: {},
  spacing: {},
} as const;

export const COLOR_SET = {
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
