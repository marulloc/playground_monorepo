import Image from 'next/image';
// import avatarImage from './mock.png';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';

const Avatar = ({ src }: { src?: string }) => {
  return (
    <div
      className={classNames(
        'h-9 w-9 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 pointer-events-auto',
        'flex items-center justify-center',
      )}
    >
      A
      {/* <Image
        src={src || avatarImage}
        alt=""
        className={classNames("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800")}
        fill
        priority
      /> */}
    </div>
  );
};

export default Avatar;
