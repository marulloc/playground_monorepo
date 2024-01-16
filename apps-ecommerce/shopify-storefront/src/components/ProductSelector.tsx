'use client';

import { classNames } from '@/styles/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  product: Product;
};
const ProductSelector = ({ product: { variants, options } }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSelect = (
    name: Product['options'][number]['name'],
    value: Product['options'][number]['values'][number],
  ) => {
    const searchParamsWithOption = new URLSearchParams(searchParams.toString());

    searchParamsWithOption.set(name, value);

    const search = searchParamsWithOption.toString();
    const query = search ? `?${search}` : '';

    router.replace(`${pathname}/${query}`, { scroll: false });
  };

  return (
    <>
      {options.map((option) => (
        <dl key={`product-option-${option.name}`} className="mb-8">
          <dt className="mb-4 text-sm uppercase tracking-wide">{option.name}</dt>

          <dd className="flex flex-wrap gap-3">
            {option.values.map((value) => (
              <button
                key={`product-option-${option.name}-${value}`}
                onClick={() => handleSelect(option.name, value)}
                className={classNames(
                  'flex min-w-[48px] items-center justify-center rounded-lg border bg-neutral-100 px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900',

                  searchParams.get(option.name) === value
                    ? 'cursor-default ring-2 ring-teal-600' // active option
                    : 'ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-teal-600 ',
                )}
              >
                {value}
              </button>
            ))}
          </dd>
        </dl>
      ))}

      {/*  */}

      <dl className="mb-8">
        <dt className="mb-4 text-sm uppercase tracking-wide">{'Colors'}</dt>
        <dd className="flex flex-wrap gap-3">
          <button
            // key={value}
            // aria-disabled={!isAvailableForSale}
            // disabled={!isAvailableForSale}
            // onClick={() => {
            //   // router.replace(optionUrl, { scroll: false });
            // }}
            title={`${'Colors'} ${'Red'}${!true ? ' (Out of Stock)' : ''}`}
            className={classNames(
              'flex min-w-[48px] items-center justify-center rounded-lg border bg-neutral-100 px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900',

              'ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-teal-600 ',
            )}
          >
            {'Red'}
          </button>

          <button
            title={`${'Colors'} ${'Blue'}${!true ? ' (Out of Stock)' : ''}`}
            className={classNames(
              'flex min-w-[48px] items-center justify-center rounded-lg border bg-neutral-100 px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900',

              'cursor-default ring-2 ring-teal-600', // => active options인 경우
              // 'ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ',
            )}
          >
            {'Blue'}
          </button>

          <button
            title={`${'Colors'} ${'Blue'}${!true ? ' (Out of Stock)' : ''}`}
            className={classNames(
              'flex min-w-[48px] items-center justify-center rounded-lg border bg-neutral-100 px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900',

              'cursor-default ring-2 ring-blue-600',
              // 'ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ',
              'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700',
              // {
              //   'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700':
              //     !isAvailableForSale
              // }
            )}
          >
            {'White'}
          </button>
        </dd>
      </dl>
    </>
  );
};

export default ProductSelector;
