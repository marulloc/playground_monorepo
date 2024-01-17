import { collectionFragment } from '../fragments/collection';
import { productFragment } from '../fragments/product';

export const getPredictiveSearchQuery = /* GraphQL */ `
  query getPredictiveSearch {
    predictiveSearch(query: "bl", limit: 5, limitScope: EACH, searchableFields: [TITLE], types: [COLLECTION, PRODUCT]) {
      products {
        ...product
      }
      collections {
        ...collection
      }
    }
  }
  ${productFragment}
  ${collectionFragment}
`;
