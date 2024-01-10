import { classNames } from './utils';

export const theme = {
  // color : background
  bodyBackground: classNames('bg-zinc-900'),
  mainBackground: classNames('bg-zinc-950'),
  mutedBackground: classNames('bg-zinc-800'),

  // color : text

  // sizing
  maxSize: classNames('max-w-7xl mx-auto  '),
  layoutPadding: classNames('px-2 md:px-4 xl:px-0 '),
  layoutMarginRightMinus: classNames(' xl:-mr-8'),
  layoutMarginLeftMinus: classNames(' xl:-ml-8'),
};
