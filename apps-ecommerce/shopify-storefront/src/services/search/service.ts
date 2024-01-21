import { storeFetch } from '@/shopify-gql';
import {
  getPredictiveSearchQuery,
  getProductsInCollectionSearchQuery,
  getProductsSearchQuery,
} from '@/shopify-gql/queries/search';
import {
  GetPredictiveSearchService,
  GetProductsInCollectionSearchService,
  GetProductsSearchService,
  PredictiveSearch,
} from './type';
import { parsePredictiveSearch } from './parser';
import { parseProducts } from '../product/parser';
import { flatConnection } from '@/shopify-gql/utils';

/**
 *
 * @param productId
 * @returns
 */
export const getPredictiveSearch = async (query: string): Promise<PredictiveSearch> => {
  const res = await storeFetch<GetPredictiveSearchService>({
    query: getPredictiveSearchQuery,
    variables: {
      query,
    },
  });

  return parsePredictiveSearch(res.body.data.predictiveSearch.products, res.body.data.predictiveSearch.collections);
};

export const getProductsSearch = async (
  query: string,
  filters: ShopifyProductFilter[],
  sortKey: ShopifySortKey,
  reverse: boolean,
) => {
  const res = await storeFetch<GetProductsSearchService>({
    query: getProductsSearchQuery,
    variables: {
      query,
      productFilters: filters,
      sortKey,
      reverse,
    },
  });

  return parseProducts(flatConnection(res.body.data.search));
};

export const getProductsInCollectionSearch = async (
  handle: string,
  filters: ShopifyProductFilter[],
  sortKey: ShopifySortKey,
  reverse: boolean,
) => {
  const res = await storeFetch<GetProductsInCollectionSearchService>({
    query: getProductsInCollectionSearchQuery,
    variables: {
      handle,
      productFilters: filters,
      sortKey,
      reverse,
    },
  });

  return parseProducts(flatConnection(res.body.data.collection.products));
};
