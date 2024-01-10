import Link from 'next/link';
import Image from 'next/image';
import { classNames } from '@/styles/utils';

const Logo = async () => {
  // Get Logo

  return (
    <div className="relative inline-block">
      <Link href="/">
        <div
          className={classNames(
            'px-2 py-1',
            'text-xs leading-3   text-teal-500 hover:text-zinc-400',
            // 'border rounded-md border-zinc-600 hover:border-zinc-500',
            // 'bg-zinc-800',

            'text-center',
          )}
        >
          <div>Marulloc</div>
          <div>Storefront</div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
