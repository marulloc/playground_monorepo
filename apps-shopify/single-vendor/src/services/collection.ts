import { Collection } from '@shopify/hydrogen-react/storefront-api-types';
import { storefrontApi } from './api/shopify-api';
import { collectionQuery } from './graphql/collection';

/**
 *
 * @param variables.id collection's id
 * @example getProductsInCollection({id: "automated-collection"})
 * @returns
 */
export const getProductsInCollection = async (variables: { id: Collection['id'] }) => {
  const { collection } = await storefrontApi<Collection>(
    { query: collectionQuery.getProductsInCollection, variables },
    { revalidate: 10 },
  );
  return collection;
};
