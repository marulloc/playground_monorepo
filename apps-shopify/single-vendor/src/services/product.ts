import { Product, SelectedOptionInput } from '@shopify/hydrogen-react/storefront-api-types';
import { storefrontApi } from './api/shopify-api';
import { productQuery } from './graphql/product';
import { Maybe } from 'graphql/jsutils/Maybe';

export const productQL = {
  /**
   *
   * @param variables.id product's id
   * @example getProductById({id: "the-collection-snowboard-hydrogen"})
   * @returns
   */
  getProductById: async (variables: { id: Product['id'] }) => {
    const { product } = await storefrontApi<Product>(
      { query: productQuery.getProductById, variables },
      { revalidate: 10 },
    );

    return product;
  },

  /**
   *
   * @param variables.id product's id
   * @param variables.selectedOptions user selected option
   * @example
   * @returns
   */
  getVariantByOptions: async (variables: { id: Product['id']; selectedOptions: SelectedOptionInput[] }) => {
    const { product } = await storefrontApi<Product>(
      { query: productQuery.getVariantByOptions, variables },
      { revalidate: 10 },
    );

    return product;
  },
};
