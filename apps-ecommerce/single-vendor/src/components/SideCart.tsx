'use client';
import { Fragment, useMemo, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRecoilState, useRecoilStateLoadable } from 'recoil';
import { localCartState } from '@/recoils/cart';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gidParser } from '@/services/parsers/gidParser';
import { cartQL } from '@/services/cart';
import { Cart, CartLine } from '@shopify/hydrogen-react/storefront-api-types';

const SideCart = () => {
  const [open, setOpen] = useState(false);

  const [localCart, setLocalCart] = useRecoilState(localCartState);

  const cartLines = useMemo(() => {
    return localCart?.lines.edges.map(({ node }) => node) || [];
  }, [localCart]);

  const handleUpdateLine = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id: cartLineId, value } = e.target;
    if (!localCart || !cartLineId || !value) return;

    const { cart: updatedCart } = await cartQL.updateCartLines({
      cartId: localCart?.id,
      lines: [{ id: cartLineId, quantity: Number(value) }],
    });

    setLocalCart(updatedCart as Cart);
  };

  const handleDeleteLine = async (cartLine: CartLine) => {
    if (!localCart || !cartLine.id) return;

    const { cart: updatedCart } = await cartQL.removeCartLines({
      cartId: localCart?.id,
      lineIds: [cartLine.id],
    });

    setLocalCart(updatedCart as Cart);
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        type="button"
        className="m-2 relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {/* <span className="absolute -inset-1.5" /> */}
        <span className="sr-only">View Cart</span>
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {cartLines.map((cartLine) => (
                                <li key={cartLine.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image
                                      src={cartLine.merchandise.image?.url || ''}
                                      alt={cartLine.merchandise.image?.altText || ''}
                                      width={cartLine.merchandise.image?.width as number}
                                      height={cartLine.merchandise.image?.height as number}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <Link
                                            href={`/${
                                              gidParser
                                                .extract(cartLine.merchandise.product.id)
                                                ?.resource.toLowerCase() as 'product'
                                            }/${gidParser.extract(cartLine.merchandise.product.id)?.id}`}
                                          >
                                            {cartLine.merchandise.product.title}
                                          </Link>
                                        </h3>
                                        <p className="ml-4">
                                          <span>{cartLine.cost.totalAmount.currencyCode}</span>
                                          <span>{cartLine.cost.totalAmount.amount}</span>
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">{cartLine.merchandise.title}</p>
                                    </div>

                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <label htmlFor={`quantity-${cartLine.id}`} className="sr-only">
                                        Quantity, {cartLine.quantity}
                                      </label>
                                      <select
                                        onChange={(e) => handleUpdateLine(e)}
                                        id={cartLine.id}
                                        name={'quantity'}
                                        defaultValue={cartLine.quantity}
                                        className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                      >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                      </select>

                                      <div className=" ">
                                        <button
                                          type="button"
                                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500 space-x-2"
                                          onClick={() => handleDeleteLine(cartLine as CartLine)}
                                        >
                                          <span className="sr-only">Remove</span>
                                          <span className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Remove
                                          </span>
                                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                          <Link
                            href={localCart?.checkoutUrl as string}
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SideCart;
