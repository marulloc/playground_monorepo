import { Product, SelectedOptionInput } from '@shopify/hydrogen-react/storefront-api-types';
import { storefrontApi } from './api/shopify-api';
import { productQuery } from './graphql/product';
import { flattenConnection } from '@shopify/hydrogen-react';

/**
 *
 * @param variables.id product's id
 * @example getProductById({id: "the-collection-snowboard-hydrogen"})
 * @returns
 */
export const getProductById = async (variables: { id: Product['id'] }) => {
  const { product } = await storefrontApi<Partial<Product>>(
    { query: productQuery.getProductById, variables },
    { revalidate: 10 },
  );

  return product;
};

/**
 *
 * @param variables.id product's id
 * @param variables.selectedOptions user selected option
 * @example
 * @returns
 */
export const getVariantByOptions = async (variables: {
  handle: Product['id'];
  selectedOptions: SelectedOptionInput[];
}) => {
  const { product } = await storefrontApi<Partial<Product['variantBySelectedOptions']>>(
    { query: productQuery.getVariantByOptions, variables },
    { revalidate: 10 },
  );

  return product;
};
