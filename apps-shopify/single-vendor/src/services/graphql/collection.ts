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
              id
              title
              handle
              vendor
              productType
              availableForSale
              images(first: 1) {
                edges {
                  node {
                    id
                    url
                    width
                    height
                    altText
                  }
                }
              }
              priceRange { # Returns range of prices for a product in the shop's currency.
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  `,
};

export const collectionMutation = {};
