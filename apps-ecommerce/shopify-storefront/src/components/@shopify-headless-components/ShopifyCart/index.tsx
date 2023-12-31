'use client';

import { classNames } from '@/styles/utils';
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon';
import { Drawer } from '../../@marulloc-compound-components/Drawer';
import { LockClosedIcon, MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ShopifyCart = () => {
  return (
    <Drawer anchor={'right'}>
      <Drawer.Overlay />

      <Drawer.Trigger>
        {({ open }) => (
          <button
            onClick={() => open()}
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
        )}
      </Drawer.Trigger>

      <Drawer.Contents className=" ">
        {({ isOpen, close }) => (
          <div
            className={classNames(
              'bg-black bg-opacity-70 backdrop-blur-sm',
              'border-l border-gray-600',
              'h-full w-screen md:w-[400px]',
              'p-6',
              'dark:text-white  ',

              'flex flex-col',
            )}
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-200">My Cart</p>

              <button
                aria-label="Close cart"
                onClick={() => close()}
                className={classNames(
                  'group',
                  'h-10',
                  'rounded-lg bg-zinc-800 border border-zinc-600',
                  'p-2.5',
                  'hover:ring-1 ring-zinc-400 ring-inse hover:text-zinc-100 text-zinc-300',
                )}
              >
                <XMarkIcon className={classNames('h-full w-auto', 'group-hover:scale-110')} />
              </button>
            </div>

            {/*  */}
            <div className="flex h-full flex-col justify-between overflow-hidden p-1">
              <ul className="flex-grow overflow-auto py-4">
                <li className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
                  <div className="relative flex w-full flex-row justify-between px-1 py-4">
                    <div
                      id="delete cart line" // Delete Cart Line
                      className="absolute z-40 -mt-2 ml-[55px]"
                    >
                      <button
                        className={classNames(
                          'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
                        )}
                      >
                        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />{' '}
                      </button>
                    </div>

                    <Link
                      id="variant-image" // Display Line's variant image
                      href={'#'}
                      onClick={() => close()}
                      className="z-30 flex flex-row space-x-4"
                    >
                      <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                        <div className="  w-full h-full object-cover bg-gray-400 flex justify-center items-center">
                          Image
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col text-base">
                        <span
                          id="Product Title" // Display Line Product Title
                          className="leading-tight"
                        >
                          Product Title
                        </span>
                        {/* 
                          Variant가 하나인 경우에 Product Tile과 Line의 Variant Title이 같다
                          {item.merchandise.title !== DEFAULT_OPTION ? (
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.merchandise.title}</p> 
                          ) : null} 
                        */}
                        <p
                          className="text-sm text-neutral-500 dark:text-neutral-400"
                          id="Merchandise Title" // Display Line variant(variant title with selected option) Title
                        >
                          Merchandise Title
                        </p>
                      </div>
                    </Link>

                    <div className="flex h-16 flex-col justify-between">
                      <p
                        id="Line Price & Quantity" // Quantity & Price
                        suppressHydrationWarning={true}
                        className="flex justify-end space-y-2 text-right text-sm"
                      >
                        {`${new Intl.NumberFormat(undefined, {
                          style: 'currency',
                          currency: 'KRW',
                          currencyDisplay: 'narrowSymbol',
                        }).format(parseFloat('30000'))}`}
                        <span className={classNames('ml-1 inline')}>{'KRW'}</span>
                      </p>

                      <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                        <button
                          id="minus qunatity button" // Update line quantity minus
                          className={classNames(
                            'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
                            'ml-auto',
                          )}
                        >
                          <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
                        </button>
                        <p className="w-6 text-center">
                          <span
                            className="w-full text-sm"
                            id="Line Quantity" // quantity of each Line
                          >
                            {3}
                          </span>
                        </p>

                        <button
                          className={classNames(
                            'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
                          )}
                          id="pluse qunatity button" // Update line quantity pluse
                        >
                          <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                  <p>Taxes</p>
                  <p suppressHydrationWarning={true} className="flex justify-end space-y-2 text-right text-sm">
                    {`${new Intl.NumberFormat(undefined, {
                      style: 'currency',
                      currency: 'KRW',
                      currencyDisplay: 'narrowSymbol',
                    }).format(parseFloat('30000'))}`}
                    <span className={classNames('ml-1 inline')}>{'KRW'}</span>
                  </p>
                </div>
                <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                  <p>Shipping</p>
                  <p className="text-right">Calculated at checkout</p>
                </div>
                <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                  <p>Total</p>
                  <p suppressHydrationWarning={true} className="flex justify-end space-y-2 text-right text-sm">
                    {`${new Intl.NumberFormat(undefined, {
                      style: 'currency',
                      currency: 'KRW',
                      currencyDisplay: 'narrowSymbol',
                    }).format(parseFloat('30000'))}`}
                    <span className={classNames('ml-1 inline')}>{'KRW'}</span>
                  </p>
                </div>
              </div>
              <a
                href={'#'}
                className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        )}
      </Drawer.Contents>
    </Drawer>
  );
};

export default ShopifyCart;
