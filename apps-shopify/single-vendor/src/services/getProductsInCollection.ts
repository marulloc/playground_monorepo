import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
query getProductsInCollection($handle: String!) {
  collection(handle: $handle) {
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
`;

/**
 *
 * @param variables.handle collection's handle
 * @example getProductsInCollection({handle: "automated-collection"})
 * @returns
 */
export const getProductsInCollection = async (variables: { handle: string }) => {
  const response = await shopifyTmpApi({ query, variables }, { revalidate: 10 });
  return response;
};
