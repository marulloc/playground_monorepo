// Theme Config

// colorTheme['default']['background'][0] => usage
const colorThemeByLevel = {
  default: {
    background: [''], //level
    border: [''],
    text: [''],
  },
  primary: {
    background: [''], //level
    border: [''],
    text: [''],
  },
  secondary: {
    background: [''], //level
    border: [''],
    text: [''],
  },
  disabled: {
    background: [''], //level
    border: [''],
    text: [''],
  },
};

const textThemeByViewport = {
  h1: ['xs:', 'sm:', 'md:', 'lg:', 'xl:'],
  h2: ['xs:', 'sm:', 'md:', 'lg:', 'xl:'],
  h3: ['xs:', 'sm:', 'md:', 'lg:', 'xl:'],
  body1: ['xs:', 'sm:', 'md:', 'lg:', 'xl:'],
  body2: ['xs:', 'sm:', 'md:', 'lg:', 'xl:'],
  extra: [],
};

const gapThemeByViewport = {
  default: '',
  xs: [],
  md: [],
};

/**
 *
 *
 *
 *  d이게 아니면
 */
const staticTheme = {};
const responsiveTheme = {
  xs: {
    text: {
      largest: [],
    },
    gap: {
      largest: '',
      large: '',
      medium: '',
      small: '',
      smallest: '',
    },
  },

  sm: {
    text: {},
    gap: {},
  },

  md: {
    text: {},
    gap: {},
  },

  lg: {
    text: {},
    gap: {},
  },
  xl: {
    text: {},
    gap: {},
  },
};
