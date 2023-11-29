import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { COLOR_THEME, RESPONSIVE_THEME } from '../config';

type PaperProps<T extends React.ElementType> = {
  children?: React.ReactNode;
  as?: T;
  defaultProps?: Omit<React.ComponentPropsWithoutRef<T>, 'children'>;
};

/**
 * @todo background level 조절
 * @param param0
 * @returns
 */
const Paper = <T extends React.ElementType>({ children, as, defaultProps }: PaperProps<T>) => {
  const Component = as ?? 'div';

  const classes = classNames(
    COLOR_THEME.fill.base,
    RESPONSIVE_THEME.px,
    RESPONSIVE_THEME.py,
    'rounded-lg ',
    defaultProps?.className,
  );

  return (
    <Component {...defaultProps} className={classes}>
      {children}
    </Component>
  );
};

export default Paper;

/**
 *
 * root layout - header  backdrop-blur-xl bg-zinc-700 bg-opacity-40     rounded-lg ====> done
 * root layout - main bg-zinc-700 bg-opacity-40 backdrop-blur-lg  rounded-lg ====> done
 *
 * article card  hover:bg-zinc-400 hover:bg-opacity-10  border border-transparent hover:border-zinc-800 rounded-md
 * series card   hover:bg-zinc-400 hover:bg-opacity-10  border border-transparent hover:border-zinc-800 rounded-md
 *
 */
