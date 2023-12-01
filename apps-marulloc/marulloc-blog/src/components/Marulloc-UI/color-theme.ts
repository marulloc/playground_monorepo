const COLOR_THEME = {
  text: {
    base: {
      default: 'text-zinc-200',
      hover: 'hover:text-zinc-50 group-hover:text-zinc-50',
    },
    muted: {
      default: 'text-zinc-400',
      hover: 'hover:text-zinc-200 group-hover:text-zinc-200',
    },
    primary: {
      default: 'text-pink-600',
      hover: 'hover:text-pink-400 group-hover:text-pink-400',
    },
    secondary: {
      default: '',
      hover: '',
    },
    disabled: {
      default: 'text-zinc-600',
      hover: 'hover:text-zinc-500 group-hover:text-zinc-500',
    },
  },

  fill: {
    base: {
      default: 'bg-zinc-700',
      hover: 'hover:bg-zinc-600 group-hover:bg-zinc-600',
    },
    muted: {
      default: 'bg-zinc-500',
      hover: 'hover:bg-zinc-300 group-hover:bg-zinc-300',
    },
    primary: {
      default: 'bg-pink-600',
      hover: 'hover:bg-pink-400 group-hover:bg-pink-400',
    },
    secondary: {
      default: '',
      hover: '',
    },
    disabled: {
      default: 'bg-zinc-800',
      hover: 'hover:bg-zinc-700 group-hover:bg-zinc-700',
    },
  },

  border: {
    base: { default: '', hover: '' },
    primary: { default: '', hover: '' },
    secondary: { default: '', hover: '' },
    disabled: { default: '', hover: '' },
  },
} as const;
