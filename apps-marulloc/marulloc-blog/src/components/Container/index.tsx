import { classNames } from "@/utils/classNames";

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={classNames("max-w-6xl mx-auto", className)}>{children}</div>;
};

export default Container;
