import COLOR_THEME from './color-theme';
import FONT_THEME from './font-theme';

export type ColorTheme = typeof COLOR_THEME;
export type ColorType<T extends keyof ColorTheme> = keyof ColorTheme[T];
export type ColorClassName<T extends keyof ColorTheme> = keyof ColorTheme[T][ColorType<T>];

export const getColorTheme = <T extends keyof ColorTheme>(
  theme: T,
  colors: { type: ColorType<T>; name: ColorClassName<T> }[],
) => {
  const colorTheme = COLOR_THEME[theme];

  const classArr = colors.map(({ type, name }) => colorTheme[type][name]);
  return classArr.join(' ');
};

export type FontTheme = typeof FONT_THEME;
export type FontType = keyof FontTheme;
export type FontClassName = keyof FontTheme[FontType];

export const getFontTheme = (fonts: { type: FontType; name: FontClassName }[]) => {
  const classArr = fonts.map(({ type, name }) => FONT_THEME[type][name]);
  return classArr.join(' ');
};
