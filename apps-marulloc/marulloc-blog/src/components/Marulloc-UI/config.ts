import { classNames } from './utils/classNames';

// Theme Config
export const COLOR_THEME = {
  text: {
    base: classNames('text-zinc-200'), // base(primary) text color
    base_hover: classNames('hover:text-zinc-50 group-hover:text-zinc-50'),
    muted: classNames('text-zinc-400'), // muted color from base(primary) text color
    muted_hover: classNames('hover:text-zinc-200 group-hover:text-zinc-200'),
    accent: classNames('text-pink-600'), // inverted from base(primary) text color
    accent_hover: classNames('hover:text-pink-400 group-hover:text-pink-400'),

    disabled: classNames('text-zinc-600'),
  },

  fill: {
    base: classNames('bg-zinc-700 bg-opacity-40 backdrop-blur-lg'), // base(primary) bg color
    base_hover: classNames('hover:bg-zinc-400 hover:bg-opacity-10 group-hover:bg-zinc-400 group-hover:bg-opacity-10'),
    accent: classNames('bg-pink-600'), // inverted from base(primary) bg color
    accent_hover: classNames('hover:bg-pink-400 group-hover:bg-pink-400'),

    disabled: '', // disabled bg color
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
    h1: classNames('text-4xl font-bold', 'inline-block'),
    h2: classNames('text-3xl font-bold ', 'inline-block'),
    h3: classNames('text-xl font-semibold ', 'inline-block'),
    h4: classNames('text-lg font-bold ', 'inline-block'),
    h5: classNames('text-md font-semibold', 'inline-block'),
    h6: classNames('text-md font-semibold', 'inline-block'),

    p: classNames('leading-6  '),
    a: classNames('cursor-pointer'),
    span: classNames(),
    code: classNames('text-sm ', COLOR_THEME.fill.base, 'inline bg-opacity-100', 'rounded-md  p-0.5 px-1.5 '),
  },

  px: classNames('px-4 sm:px-6 lg:px-8'),
  py: classNames('py-4 sm:py-6 lg:py-8'),
};
