import { ShopifyQLFragment } from './_shopifyQL-fragments';

export const collectionQuery = {
  getCollections: `
    query getCollections {
      collections(first: 10) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `,

  getCollectionById: `
    query getCollectionById($id: ID!) {
      collection(id: $id) {
        id
        title
        description
      }
    }
  `,

  getProductsInCollection: `
    query getProductsInCollection($id: ID!) {
      collection(id: $id) {
        id
        title
        products(first: 50, sortKey: BEST_SELLING) {
          edges {
            node {
            ...productCard  
            }
          }
        }
      }
    }

    ${ShopifyQLFragment.productCard}
  `,
};

export const collectionMutation = {};
