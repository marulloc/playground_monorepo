export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ') as NonNullable<React.ComponentProps<'div'>['className']>;
};
