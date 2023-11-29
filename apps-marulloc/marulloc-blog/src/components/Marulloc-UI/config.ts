import { classNames } from './utils/classNames';

// Theme Config
export const COLOR_THEME = {
  text: {
    // base(primary) text color
    base: classNames('text-zinc-200'),
    base_hover: classNames('hover:text-zinc-50 group-hover:text-zinc-50'),

    // muted color from base(primary) text color
    muted: classNames('text-zinc-400'),
    muted_hover: classNames('hover:text-zinc-200 group-hover:text-zinc-200'),

    // inverted from base(primary) text color
    accent: classNames('text-pink-600'),
    accent_hover: classNames('hover:text-pink-400 group-hover:text-pink-400'),

    // disabled text color
    disabled: classNames('text-zinc-600'),
  },

  fill: {
    // base(primary) bg color
    base: classNames('bg-zinc-700 bg-opacity-40 backdrop-blur-lg'),
    base_hover: classNames('hover:bg-zinc-400 hover:bg-opacity-10 group-hover:bg-zinc-400 group-hover:bg-opacity-10'),

    // inverted from base(primary) bg color
    accent: classNames('bg-pink-600'),
    accent_hover: classNames('hover:bg-pink-400 group-hover:bg-pink-400'),

    // disabled bg color
    disabled: '',
  },

  border: {
    base: '',
    muted: '',
    inverted: '',
    disabled: '',
  },
};

export const RESPONSIVE_THEME = {
  Typography: {
    h1: '',
    h2: '',
    body: '',
  },

  px: classNames('px-4 sm:px-6 lg:px-8'),
  py: classNames('py-4 sm:py-6 lg:py-8'),
};
