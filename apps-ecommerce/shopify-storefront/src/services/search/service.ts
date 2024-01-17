import { storeFetch } from '@/shopify-gql';
import { getPredictiveSearchQuery } from '@/shopify-gql/queries/search';
import { GetPredictiveSearchService, PredictiveSearch } from './type';
import { parsePredictiveSearch } from './parser';

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
