import { classNames } from "@/utils/classNames";

type CardProps = {};

const Card = ({}: CardProps) => {
  return (
    <>
      <Container defaultProps={{ className: classNames("p-12") }}>
        <></>
      </Container>
    </>
  );
};

type ContainerProps<T extends React.ElementType> = {
  children?: React.ReactNode;
  as?: T;
  defaultProps?: React.ComponentPropsWithoutRef<T>;
};

const Container = <T extends React.ElementType>({ children, as, defaultProps }: ContainerProps<T>) => {
  const Component = as ?? "div";
  const defaultClassName = classNames("p-6");

  return (
    <Component {...defaultProps} className={classNames(defaultClassName, defaultProps?.className)}>
      {children}
    </Component>
  );
};

type PaperProps<T extends React.ElementType> = {
  children?: React.ReactNode;
  as?: T;
  defaultProps?: React.ComponentPropsWithoutRef<T>;
};

const Paper = <T extends React.ElementType>({ children, as, defaultProps }: PaperProps<T>) => {
  const Component = as ?? "div";
  const defaultClassName = classNames("isolate bg-zinc-700 bg-opacity-40 backdrop-blur-lg rounded-lg");

  return (
    <Component {...defaultProps} className={classNames(defaultClassName, defaultProps?.className)}>
      {children}
    </Component>
  );
};

Card.Paper = Paper;
Card.Container = Container;

export default Card;
