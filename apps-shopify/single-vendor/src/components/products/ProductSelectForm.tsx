'use client';

import { useSyncDataUrl } from '@/hooks/useSyncDataUrl';
import { Cart, Product, ProductVariant } from '@shopify/hydrogen-react/storefront-api-types';
import { classNames } from '../Marulloc-UI-v2/utils/classNames';
import { RadioGroup } from '../headless-component/Form/RadioGroup';
import Form from '../headless-component/Form';
import { useState } from 'react';
import { productQL } from '@/services/product';
import { localCartState } from '@/recoils/cart';
import { useRecoilState } from 'recoil';
import { cartQL } from '@/services/cart';

const ProductSelectForm = ({ product }: { product: Product }) => {
  const [{ dataUrlMap, dataUrlArr }, syncWithDataUrl] = useSyncDataUrl();
  const [selectedVariant, setSelectedVariant] = useState<{ data: ProductVariant | null; pending: boolean }>({
    data: null,
    pending: false,
  });
  const [localCart, setLocalCart] = useRecoilState(localCartState);

  const handleSumbit = (_e: React.FormEvent<HTMLFormElement>, values: { [key: string]: string }) => {
    addToCart();
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>, selectedValues: any) => {
    const name = e.target.name;
    const value = selectedValues[name] as undefined | string;
    syncWithDataUrl(name, value);
    getSelectedVariant();
  };

  const addToCart = async () => {
    if (!localCart || !selectedVariant.data) return;

    const { cart: updatedCart } = await cartQL.addCartLines({
      cartId: localCart.id,
      lines: [{ quantity: 1, merchandiseId: selectedVariant.data.id }],
    });

    setLocalCart(updatedCart as Cart);
  };

  const getSelectedVariant = async () => {
    const selectedOptionsLen = dataUrlArr.length;
    const requiredOptionsLen = product.options.length;

    if (selectedOptionsLen !== requiredOptionsLen) return;
    setSelectedVariant({ pending: true, data: selectedVariant.data });

    const selectedOptions = dataUrlArr.map(([name, value]) => ({ name, value }));

    (async () => {
      const { variantBySelectedOptions } = await productQL.getVariantByOptions({ id: product.id, selectedOptions });
      setSelectedVariant({ pending: false, data: variantBySelectedOptions ?? null });
    })();
  };

  return (
    <div className=" ">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
      </div>
      <h2 className="sr-only">Product information</h2>

      <div className="  h-full col-span-3 lg:col-span-1  ">
        <Form className="mt-10  " handlerReturnType="json" onSubmit={handleSumbit} onChange={handleChange}>
          {product.options.map((option) => (
            <RadioGroup
              name={option.name}
              checkedValue={dataUrlMap[option.name]}
              key={option.name}
              required
              className="mt-10"
            >
              <RadioGroup.Title>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-gray-900">{option.name}</h3>
                </div>
              </RadioGroup.Title>

              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                {option.values.map((value) => (
                  <RadioGroup.Option key={`${option.name}-${value}-?`} value={value}>
                    {({ checked, value, disabled }) => (
                      <div
                        className={classNames(
                          'group relative flex items-center justify-center',
                          'rounded-md border py-3 px-4 text-sm font-medium uppercase',
                          'hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm undefined',
                        )}
                      >
                        <span>{value}</span>
                        {checked && (
                          <span className="pointer-events-none absolute -inset-px rounded-md border-2 border-indigo-500"></span>
                        )}
                      </div>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          ))}

          {/* Price */}
          <p className="text-2xl  text-gray-900 mt-10 space-x-2">
            <span className="text-lg">{selectedVariant?.data?.price?.currencyCode}</span>
            <span className=" tracking-tight font-semibold">{selectedVariant?.data?.price?.amount}</span>
          </p>

          {/* Add to Cart */}
          <div className="relative  ">
            <div
              className={classNames(
                selectedVariant.pending ? 'block' : 'hidden',
                'inset-0 bg-indigo-200 absolute h-full z-20 rounded-md ',
                'flex items-center justify-center',
                'cursor-not-allowed text-white',
              )}
            >
              Loading
            </div>
            <button
              type="submit"
              className={classNames(
                'relative mt-10 flex w-full items-center justify-center rounded-md border   px-8 py-3 text-base font-medium uppercase ',
                selectedVariant?.data?.quantityAvailable
                  ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  : 'focus:outline-none sm:flex-1  cursor-not-allowed bg-gray-100 text-gray-400 undefined',
              )}
            >
              {!!selectedVariant?.data?.quantityAvailable ? 'Add to Cart' : 'Sold out'}
              {!selectedVariant?.data?.quantityAvailable && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                >
                  <svg
                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    stroke="currentColor"
                  >
                    <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke"></line>
                  </svg>
                </span>
              )}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ProductSelectForm;
