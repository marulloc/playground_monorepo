import { generateRouteFromGID } from '../utils';

export const parseCollection = (collection: ShopifyCollection): Collection => {
  return {
    ...collection,
    routePath: generateRouteFromGID(collection.id as string),
  };
};

export const parseCollections = (collections: ShopifyCollection[]): Collection[] => {
  return collections.map((collection) => parseCollection(collection));
};
