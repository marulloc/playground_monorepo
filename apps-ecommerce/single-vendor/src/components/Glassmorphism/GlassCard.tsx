import { classNames } from '../Marulloc-UI-v2/utils/classNames';
import Image from 'next/image';
const GlassCard = ({ children, className }: { children: React.ReactNode; className?: any[] }) => {
  return (
    <GlassCard.Box>
      <GlassCard.Contents className=" p-4 ">{children}</GlassCard.Contents>
    </GlassCard.Box>
  );
};

// eslint-disable-next-line react/display-name
GlassCard.Box = ({ children, className }: { children: React.ReactNode; className?: any[] | string }) => {
  return (
    <div
      className={classNames(
        'h-full ',
        'bg-white bg-opacity-40   border-gray-100  border backdrop-blur-sm rounded-xl shadow-lg overflow-hidden',
        // "overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
};

// eslint-disable-next-line react/display-name
GlassCard.Contents = ({ children, className }: { children: React.ReactNode; className?: any[] | string }) => {
  return <div className={classNames('p-4 flex justify-center flex-col items-center', className)}>{children}</div>;
};

// eslint-disable-next-line react/display-name
GlassCard.Image = ({
  children,
  className,
  src,
}: {
  children?: React.ReactNode;
  className?: any[] | string;
  src: string;
}) => {
  return (
    <div className={classNames('h-2/3 relative round', className)}>
      <Image fill src={src} alt="" className=" object-cover " />
    </div>
  );
};

export default GlassCard;
