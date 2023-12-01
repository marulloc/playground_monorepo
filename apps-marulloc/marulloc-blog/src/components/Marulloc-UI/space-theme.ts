import { classNames } from './utils/classNames';

const NONE = '0';
const LOW = '4';
const BASE = '6';
const HIGH = '8';
const EXTRA_HIGH = '12';
const SUPER_HIGH = '16';

export type SpacingGeneralTypes = keyof Omit<typeof SPACE_THEME, 'maxWidth'>;
export type SpacingGeneralLevels =
  | typeof NONE
  | typeof LOW
  | typeof BASE
  | typeof HIGH
  | typeof EXTRA_HIGH
  | typeof SUPER_HIGH;
export type SpacingMaxWidthLevels = keyof typeof SPACE_THEME.maxWidth.level;

const SPACE_THEME = {
  maxWidth: {
    level: {
      full: 'max-w-full',
      '7xl': 'max-w-7xl',
      '6xl': 'max-w-6xl',
      '5xl': 'max-w-5xl',
      '4xl': 'max-w-4xl',
      '3xl': 'max-w-3xl',
      '2xl': 'max-w-2xl',
    },
  },

  mx: {
    level: {
      [NONE]: { default: `mx-${NONE}`, responsive: `sm:mx-${LOW} lg:mx-${BASE}` },
      [LOW]: { default: `mx-${LOW}`, responsive: `sm:mx-${BASE} lg:mx-${HIGH}` },
      [BASE]: { default: `mx-${BASE}`, responsive: `sm:mx-${HIGH} lg:mx-${EXTRA_HIGH}` },
      [HIGH]: { default: `mx-${HIGH}`, responsive: `sm:mx-${EXTRA_HIGH} lg:mx-${SUPER_HIGH}` },
      [EXTRA_HIGH]: { default: `mx-${EXTRA_HIGH}`, responsive: `sm:mx-${SUPER_HIGH} lg:mx-20` },
      [SUPER_HIGH]: { default: `mx-${SUPER_HIGH}`, responsive: `sm:mx-20 lg:mx-24` },
    },
  },

  my: {
    level: {
      [NONE]: { default: `my-${NONE}`, responsive: `sm:my-${LOW} lg:my-${BASE}` },
      [LOW]: { default: `my-${LOW}`, responsive: `sm:my-${BASE} lg:my-${HIGH}` },
      [BASE]: { default: `my-${BASE}`, responsive: `sm:my-${HIGH} lg:my-${EXTRA_HIGH}` },
      [HIGH]: { default: `my-${HIGH}`, responsive: `sm:my-${EXTRA_HIGH} lg:my-${SUPER_HIGH}` },
      [EXTRA_HIGH]: { default: `my-${EXTRA_HIGH}`, responsive: `sm:my-${SUPER_HIGH} lg:my-20` },
      [SUPER_HIGH]: { default: `my-${SUPER_HIGH}`, responsive: `sm:my-20 lg:my-24` },
    },
  },

  px: {
    level: {
      [NONE]: { default: `px-${NONE}`, responsive: `sm:px-${LOW} lg:px-${BASE}` },
      [LOW]: { default: `px-${LOW}`, responsive: `sm:px-${BASE} lg:px-${HIGH}` },
      [BASE]: { default: `px-${BASE}`, responsive: `sm:px-${HIGH} lg:px-${EXTRA_HIGH}` },
      [HIGH]: { default: `px-${HIGH}`, responsive: `sm:px-${EXTRA_HIGH} lg:px-${SUPER_HIGH}` },
      [EXTRA_HIGH]: { default: `px-${EXTRA_HIGH}`, responsive: `sm:px-${SUPER_HIGH} lg:px-20` },
      [SUPER_HIGH]: { default: `px-${SUPER_HIGH}`, responsive: `sm:px-20 lg:px-24` },
    },
  },

  py: {
    level: {
      [NONE]: { default: `py-${NONE}`, responsive: `sm:py-${LOW} lg:py-${BASE}` },
      [LOW]: { default: `py-${LOW}`, responsive: `sm:py-${BASE} lg:py-${HIGH}` },
      [BASE]: { default: `py-${BASE}`, responsive: `sm:py-${HIGH} lg:py-${EXTRA_HIGH}` },
      [HIGH]: { default: `py-${HIGH}`, responsive: `sm:py-${EXTRA_HIGH} lg:py-${SUPER_HIGH}` },
      [EXTRA_HIGH]: { default: `py-${EXTRA_HIGH}`, responsive: `sm:py-${SUPER_HIGH} lg:py-20` },
      [SUPER_HIGH]: { default: `py-${SUPER_HIGH}`, responsive: `sm:py-20 lg:py-24` },
    },
  },

  sx: {
    level: {
      [NONE]: { default: `space-x-${NONE}`, responsive: `sm:space-x-${LOW} lg:space-x-${BASE}` },
      [LOW]: { default: `space-x-${LOW}`, responsive: `sm:space-x-${BASE} lg:space-x-${HIGH}` },
      [BASE]: { default: `space-x-${BASE}`, responsive: `sm:space-x-${HIGH} lg:space-x-${EXTRA_HIGH}` },
      [HIGH]: { default: `space-x-${HIGH}`, responsive: `sm:space-x-${EXTRA_HIGH} lg:space-x-${SUPER_HIGH}` },
      [EXTRA_HIGH]: { default: `space-x-${EXTRA_HIGH}`, responsive: `sm:space-x-${SUPER_HIGH} lg:space-x-20` },
      [SUPER_HIGH]: { default: `space-x-${SUPER_HIGH}`, responsive: `sm:space-x-20 lg:space-x-24` },
    },
  },

  sy: {
    level: {
      [NONE]: { default: `space-y-${NONE}`, responsive: `sm:space-y-${LOW} lg:space-y-${BASE}` },
      [LOW]: { default: `space-y-${LOW}`, responsive: `sm:space-y-${BASE} lg:space-y-${HIGH}` },
      [BASE]: { default: `space-y-${BASE}`, responsive: `sm:space-y-${HIGH} lg:space-y-${EXTRA_HIGH}` },
      [HIGH]: { default: `space-y-${HIGH}`, responsive: `sm:space-y-${EXTRA_HIGH} lg:space-y-${SUPER_HIGH}` },
      [EXTRA_HIGH]: { default: `space-y-${EXTRA_HIGH}`, responsive: `sm:space-y-${SUPER_HIGH} lg:space-y-20` },
      [SUPER_HIGH]: { default: `space-y-${SUPER_HIGH}`, responsive: `sm:space-y-20 lg:space-y-24` },
    },
  },

  gx: {
    level: {
      [NONE]: { default: `gap-x-${NONE}`, responsive: `sm:gap-x-${LOW} lg:gap-x-${BASE}` },
      [LOW]: { default: `gap-x-${LOW}`, responsive: `sm:gap-x-${BASE} lg:gap-x-${HIGH}` },
      [BASE]: { default: `gap-x-${BASE}`, responsive: `sm:gap-x-${HIGH} lg:gap-x-${EXTRA_HIGH}` },
      [HIGH]: { default: `gap-x-${HIGH}`, responsive: `sm:gap-x-${EXTRA_HIGH} lg:gap-x-${SUPER_HIGH}` },
      [EXTRA_HIGH]: { default: `gap-x-${EXTRA_HIGH}`, responsive: `sm:gap-x-${SUPER_HIGH} lg:gap-x-20` },
      [SUPER_HIGH]: { default: `gap-x-${SUPER_HIGH}`, responsive: `sm:gap-x-20 lg:gap-x-24` },
    },
  },
  gy: {
    level: {
      [NONE]: { default: `gap-y-${NONE}`, responsive: `sm:gap-y-${LOW} lg:gap-y-${BASE}` },
      [LOW]: { default: `gap-y-${LOW}`, responsive: `sm:gap-y-${BASE} lg:gap-y-${HIGH}` },
      [BASE]: { default: `gap-y-${BASE}`, responsive: `sm:gap-y-${HIGH} lg:gap-y-${EXTRA_HIGH}` },
      [HIGH]: { default: `gap-y-${HIGH}`, responsive: `sm:gap-y-${EXTRA_HIGH} lg:gap-y-${SUPER_HIGH}` },
      [EXTRA_HIGH]: { default: `gap-y-${EXTRA_HIGH}`, responsive: `sm:gap-y-${SUPER_HIGH} lg:gap-y-20` },
      [SUPER_HIGH]: { default: `gap-y-${SUPER_HIGH}`, responsive: `sm:gap-y-20 lg:gap-y-24` },
    },
  },
} as const;

export default SPACE_THEME;
