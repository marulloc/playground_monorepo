'use client';

import useQueryString from '@/hooks/useQueryString';
import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { FormEvent, useMemo } from 'react';
import { classNames } from '../Marulloc-UI-v2/utils/classNames';
import Link from 'next/link';

type RadioGroupProps = {
  label: string;
} & React.ComponentPropsWithoutRef<'fieldset'>;
const RadioGroup = ({ label, children, ...restProps }: RadioGroupProps) => {
  return (
    <fieldset {...restProps}>
      <legend className="sr-only">{label}</legend>
      {children}
    </fieldset>
  );
};

type RadioProps = {
  inputProps?: React.ComponentPropsWithoutRef<'input'>;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'label'>;
const Radio = ({ children, inputProps, ...labelProps }: RadioProps) => {
  return (
    <label className={classNames(labelProps.className)} {...labelProps}>
      <input
        type="radio"
        className={classNames('sr-only', inputProps?.className)}
        value={inputProps?.value}
        name={inputProps?.name}
        defaultChecked={inputProps?.defaultChecked}
        disabled={inputProps?.disabled}
        required={inputProps?.required}
        {...inputProps}
      />
      {children}
    </label>
  );
};

type FormProps = {
  handleSubmitReturnType: 'json' | 'form';
  onSubmit?: (e: FormEvent<HTMLFormElement>, values: any) => void;
} & Omit<React.ComponentPropsWithoutRef<'form'>, 'onSubmit'>;

const Form = (props: FormProps) => {
  const { children, handleSubmitReturnType, onSubmit, ...restProps } = props;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;

    const formData = new FormData(e.target as HTMLFormElement);

    switch (handleSubmitReturnType) {
      case 'json':
        const jsonData: any = {};
        for (const [key, value] of formData.entries()) jsonData[key] = value;
        await onSubmit(e, jsonData);
        return;

      case 'form':
      default:
        await onSubmit(e, formData);
        return;
    }
  };

  return (
    <form {...restProps} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

const ProductVariantSelector = ({ product }: { product: Product }) => {
  const searchParams = useQueryString();
  const options = useMemo(() => {
    return product.options.map((option: any) => ({
      ...option,
      values: option.values.map((value: any) => ({ value, active: searchParams[option.name] === value })),
    }));
  }, [product.options, searchParams]);

  const handleAddtoCart = (_e: FormEvent<HTMLFormElement>, values: { [key: string]: string }) => {
    console.log('@@@', values);
  };

  return (
    <div className=" ">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
      </div>
      <h2 className="sr-only">Product information</h2>

      <div className="  h-full col-span-3 lg:col-span-1  ">
        <Form className="mt-10  " handleSubmitReturnType="json" onSubmit={handleAddtoCart}>
          {options.map((option: any) => (
            <RadioGroup className="mt-10" key={option.name} label={option.name}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">{option.name}</h3>
              </div>

              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                {option.values.map(({ value, active }: any) => (
                  <Link
                    key={`${option.name}-${value}`}
                    href={{ query: { ...searchParams, [option.name]: value } }}
                    scroll={false}
                  >
                    <Radio
                      className={classNames(
                        'group relative flex items-center justify-center',
                        'rounded-md border py-3 px-4 text-sm font-medium uppercase',
                        'hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm undefined',
                      )}
                    >
                      <span>{value}</span>
                      {active && (
                        <span className="pointer-events-none absolute -inset-px rounded-md border-2 border-indigo-500"></span>
                      )}
                    </Radio>
                  </Link>
                ))}
              </div>
            </RadioGroup>
          ))}

          {/* Price */}
          <p className="text-2xl  text-gray-900 mt-10 space-x-2">
            {/* <span className="text-lg">{selectedVariant?.price?.currencyCode}</span>
          <span className=" tracking-tight font-semibold">{selectedVariant?.price?.amount}</span> */}
          </p>

          {/* Add to Cart */}
          {/* <button
          type="submit"
          className={classNames(
            'relative mt-10 flex w-full items-center justify-center rounded-md border   px-8 py-3 text-base font-medium uppercase ',
            selectedVariant?.quantityAvailable <= 0
              ? 'focus:outline-none sm:flex-1  cursor-not-allowed bg-gray-100 text-gray-400 undefined'
              : 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          )}
        >
          {selectedVariant?.quantityAvailable <= 0 ? 'Sold out, Choose another options' : 'Add to Cart'}
          {selectedVariant?.quantityAvailable <= 0 && (
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
        </button> */}
        </Form>
      </div>
    </div>
  );
};

export default ProductVariantSelector;
