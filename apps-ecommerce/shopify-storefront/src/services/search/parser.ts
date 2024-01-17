import { parseCollection } from '../collection/parser';
import { parseProduct } from '../product/parser';
import { PredictiveSearch } from './type';

export const parsePredictiveSearch = (
  products: ShopifyProduct[],
  collections: ShopifyCollection[],
): PredictiveSearch => {
  return {
    products: products.map((product) => parseProduct(product)),
    collections: collections.map((collection) => parseCollection(collection)),
  };
};
