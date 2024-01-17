import { collectionFragment } from '../fragments/collection';
import { productFragment } from '../fragments/product';

export const getPredictiveSearchQuery = /* GraphQL */ `
  query getPredictiveSearch($query: String!) {
    predictiveSearch(
      query: $query
      limit: 5
      limitScope: EACH
      searchableFields: [TITLE]
      types: [COLLECTION, PRODUCT]
    ) {
      products {
        ...product
      }
      collections {
        id
        handle
        title
        description
      }
    }
  }
  ${productFragment}
`;
