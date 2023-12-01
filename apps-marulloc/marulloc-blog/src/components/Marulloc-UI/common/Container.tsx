import SPACE_THEME, { SpacingGeneralLevels, SpacingGeneralTypes, SpacingMaxWidthLevels } from '../space-theme';
import { classNames } from '../utils/classNames';

type ContainerElement = 'div' | 'main' | 'section' | 'article' | 'header' | 'footer' | 'aside';
type ContainerSpacingTypes = SpacingGeneralTypes;
type ContainerSpacingLevels = SpacingGeneralLevels;
type ConatinerMaxWidth = SpacingMaxWidthLevels;

type ContainerProps<T extends ContainerElement> = {
  centered?: 'x' | 'y' | 'xy' | false;
  maxWidth?: ConatinerMaxWidth;

  spacing?: { type: ContainerSpacingTypes; level: ContainerSpacingLevels; responsive?: boolean }[];
  as?: T;
} & React.ComponentPropsWithoutRef<T>; //&  SpacingScales;

const Container = <T extends ContainerElement>(props: ContainerProps<T>) => {
  const { as, maxWidth = 'max-w-7xl', spacing, className, ...restProps } = props;

  const spacingClasses = (
    spacing || [
      { type: 'px', level: '0', responsive: true },
      { type: 'py', level: '0', responsive: true },
    ]
  )
    .map(({ type, level, responsive = true }) =>
      classNames(SPACE_THEME[type].level[level].default, responsive && SPACE_THEME[type].level[level].responsive),
    )
    .join(' ');

  const Component = as ?? 'div';
  const classes = classNames(spacingClasses, className);

  return (
    <div className={classNames(maxWidth, 'mx-auto left-0 right-0 w-full')}>
      <Component {...restProps} className={classes}>
        {restProps.children}
      </Component>
    </div>
  );
};

export default Container;

/**
 * @todo
 */
const getSpaceClasses = () => {};
