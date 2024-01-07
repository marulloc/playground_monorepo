'use client';

import { classNames } from '@/styles/utils';
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon';
import { useMemo, useState } from 'react';

const Cart = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => {
          console.log('???');
          setOpen(true);
        }}
        className={classNames(
          'group',
          'h-10',
          'rounded-lg bg-zinc-800 border border-zinc-600',
          'p-2.5',
          'hover:ring-1 ring-zinc-400 ring-inse hover:text-zinc-100 text-zinc-300',
        )}
      >
        <ShoppingBagIcon className={classNames('h-full w-auto', 'group-hover:scale-110')} />
      </button>

      {/* Overlay */}
      <div
        className={classNames(
          // Overlay Default Style
          'fixed inset-0 w-screen h-screen',

          // Overlay Animation
          'transform transition-opacity ease-in-out',
          open ? 'opacity-100  z-40' : ' transition-all delay-200 duration-800 opacity-0 -z-50  ',

          // Overlay Style
          'bg-black bg-opacity-30',
        )}
      >
        {/* Drawer Close Trigger */}
        <div className={classNames('w-screen h-screen', open ? 'block' : 'hidden')} onClick={() => setOpen(false)} />
      </div>

      {/* Contents */}
      <aside
        className={classNames(
          'absolute z-50',

          // Contents Anchor
          'overflow-y-auto right-0 top-0 bottom-0 h-screen',

          // Contents Style
          'bg-black bg-opacity-70 backdrop-blur-sm border-l border-gray-800 shadow-xl',
          'max-w-lg w-full',

          // Content Animation
          'transition-all transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full ',
        )}
      >
        {/* Contents Children */}
        <div className="text-red-500  w-full">asdasd</div>
      </aside>
    </>
  );
};

export default Cart;
