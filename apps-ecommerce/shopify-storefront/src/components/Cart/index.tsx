'use client';

import { classNames } from '@/styles/utils';
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon';
import { useEffect, useState } from 'react';
import { Drawer } from '../compound-components/Drawer';

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

const RefactoredCart = () => {
  const [anchor, setAnchor] = useState<'left' | 'top' | 'bottom' | 'right'>('left');

  return (
    <>
      <div className="flex space-x-4 mx-auto max-w-2xl justify-center my-4">
        <button className="p-4  bg-teal-600 rounded-md" onClick={() => setAnchor('left')}>
          Left
        </button>
        <button className="p-4  bg-blue-600 rounded-md" onClick={() => setAnchor('right')}>
          Right
        </button>
        <button className="p-4 bg-red-600 rounded-md" onClick={() => setAnchor('top')}>
          Top
        </button>
        <button className="p-4  bg-purple-600 rounded-md" onClick={() => setAnchor('bottom')}>
          Bottom
        </button>
      </div>

      <Drawer anchor={anchor}>
        <Drawer.Overlay />
        <div className="flex space-x-4 mx-auto max-w-2xl justify-center my-4">
          <Drawer.Trigger>
            {({ isOpen, open }) => (
              <button
                className="p-4  bg-teal-600 rounded-md"
                onClick={() => {
                  setAnchor('left');
                  open();
                }}
              >
                left
              </button>
            )}
          </Drawer.Trigger>
          <Drawer.Trigger>
            {({ isOpen, open }) => (
              <button
                className="p-4  bg-blue-600 rounded-md"
                onClick={() => {
                  setAnchor('right');
                  open();
                }}
              >
                right
              </button>
            )}
          </Drawer.Trigger>
          <Drawer.Trigger>
            {({ isOpen, open }) => (
              <button
                className="p-4  bg-red-600 rounded-md"
                onClick={() => {
                  setAnchor('top');
                  open();
                }}
              >
                top
              </button>
            )}
          </Drawer.Trigger>
          <Drawer.Trigger>
            {({ isOpen, open }) => (
              <button
                className="p-4  bg-purple-600 rounded-md"
                onClick={() => {
                  setAnchor('bottom');
                  open();
                }}
              >
                bottom
              </button>
            )}
          </Drawer.Trigger>

          {/* <Drawer.Trigger>
            {({ open }) => (
              <>
                <button
                  onClick={() => {
                    console.log('???');
                    open();
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
              </>
            )}
          </Drawer.Trigger> */}
        </div>
        <Drawer.Contents className=" ">
          {({ isOpen, close }) => (
            <>
              <div
                className={classNames(
                  'bg-black bg-opacity-70 backdrop-blur-sm  border shadow-xl',
                  'flex justify-center items-center',
                  '  h-full  w-screen md:w-full',
                  // 'max-w-lg   h-screen w-80',
                )}
              >
                <span className="text-red-500   ">asdasd</span>
                <button className="p-4 bg-red-600 m-4" onClick={() => close()}>
                  Close
                </button>
              </div>
            </>
          )}
        </Drawer.Contents>
      </Drawer>

      <Drawer anchor={'left'}>
        <Drawer.Overlay />

        <Drawer.Trigger>
          {({ open }) => (
            <>
              <button
                onClick={() => {
                  console.log('???');
                  open();
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
            </>
          )}
        </Drawer.Trigger>
        <Drawer.Contents className=" ">
          {({ isOpen, close }) => (
            <>
              <div
                className={classNames(
                  'bg-black bg-opacity-70 backdrop-blur-sm  border shadow-xl',
                  'flex justify-center items-center',
                  '  h-full  w-screen md:w-full',
                  // 'max-w-lg   h-screen w-80',
                )}
              >
                <span className="text-red-500   ">@@@@@@@@@@</span>
                <button className="p-4 bg-red-600 m-4" onClick={() => close()}>
                  Close
                </button>
              </div>
            </>
          )}
        </Drawer.Contents>
      </Drawer>
    </>
  );
};

export default RefactoredCart;
