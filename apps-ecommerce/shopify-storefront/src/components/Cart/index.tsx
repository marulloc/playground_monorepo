'use client';

import { classNames } from '@/styles/utils';
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon';
import { useEffect, useState } from 'react';

const Cart = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [open]);
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
          'fixed top-0 w-screen h-screen max-h-screen  overscroll-none  ',

          // Overlay Animation
          'transform transition-opacity ease-in-out',
          open ? 'opacity-100  z-40' : ' transition-all delay-200 duration-800 opacity-0 -z-50  ',

          // Overlay Style
          'bg-black bg-opacity-50',
        )}
      >
        {/* Drawer Close Trigger */}
        <div className={classNames('w-screen h-screen ', open ? 'block' : 'hidden')} onClick={() => setOpen(false)} />
      </div>

      {/* Contents */}
      <aside
        className={classNames(
          'fixed z-50  ',

          /* Contents Anchor */
          // 'overflow-y-auto right-0 top-0 bottom-0 h-screen', // right
          // 'overflow-y-auto left-0 top-0 bottom-0 h-screen', // left
          // 'top-0 left-0 right-0 overflow-x-scroll overflow-y-auto  w-screen ', // top
          'bottom-0 left-0 right-0 overflow-x-auto overflow-y-auto w-screen', // bot

          /* Content Animation */
          'transition-all transform duration-300 ease-in-out',
          open ? 'opacity-100' : 'opacity-0',

          /* Content Animation with Anchor */
          // open ? 'translate-x-0' : 'translate-x-full ', // right
          // open ? 'translate-x-0' : '-translate-x-full ', // left
          // open ? 'translate-y-0' : '-translate-y-full', // top
          open ? 'translate-y-0' : 'translate-y-full', // bot
        )}
      >
        {/* Contents Children */}
        <div
          className={classNames(
            'bg-black bg-opacity-70 backdrop-blur-sm  border shadow-xl',
            'flex justify-center items-center',
            // 'max-w-lg   h-screen w-80',
            'h-80',
          )}
        >
          <span className="text-red-500   ">asdasd</span>
        </div>
      </aside>
    </>
  );
};

export default Cart;
