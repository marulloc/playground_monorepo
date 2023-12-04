import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { ColorType, getColorTheme } from '@/components/Marulloc-UI/theme/getTheme';

type PaperElement = 'div' | 'main' | 'section' | 'article' | 'header' | 'footer' | 'aside';

type PaperProps<T extends PaperElement> = {
  theme?: { color?: ColorType<'fill'>; hoverColor?: ColorType<'fill'> };

  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Paper = <T extends PaperElement>(props: PaperProps<T>) => {
  const { as, className, theme, ...restProps } = props;

  const Component = as ?? 'div';
  const classes = classNames(
    'isolate',
    theme?.color && getColorTheme('fill', [{ type: theme?.color, name: 'default' }]),
    theme?.hoverColor && getColorTheme('fill', [{ type: theme?.hoverColor, name: 'hover' }]),
    className,
  );

  return (
    <Component {...restProps} className={classes}>
      {restProps.children}
    </Component>
  );
};

export default Paper;
