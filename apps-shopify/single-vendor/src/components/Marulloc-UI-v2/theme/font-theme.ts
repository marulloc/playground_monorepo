const FONT_THEME = {
  h1: {
    default: 'text-4xl font-bold',
    responsive: 'md:text-5xl lg:text-6xl',
  },
  h2: {
    default: 'text-3xl font-bold',
    responsive: 'md:text-4xl lg:text-5xl',
  },
  h3: {
    default: 'text-2xl font-bold',
    responsive: 'md:text-3xl lg:text-4xl',
  },
  h4: {
    default: 'text-xl font-semibold',
    responsive: 'md:text-2xl lg:text-3xl',
  },
  h5: {
    default: 'text-lg font-semibold',
    responsive: 'md:text-xl lg:text-2xl',
  },
  h6: {
    default: 'text-base font-semibold',
    responsive: 'md:text-lg lg:text-xl',
  },
  body1: {
    default: 'text-base',
    responsive: 'md:text-lg',
  },
  body2: {
    default: 'text-sm',
    responsive: 'md:text-base',
  },
  caption: {
    default: 'text-xs',
    responsive: 'md:text-sm',
  },
} as const;

export default FONT_THEME;
