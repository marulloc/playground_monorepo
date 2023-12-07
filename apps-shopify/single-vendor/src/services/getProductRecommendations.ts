import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
query getProductRecommendations($productId: ID!) {
  productRecommendations(productId: $productId, intent: RELATED) {
    id
    title
    description
    variants(first: 3) {
      edges {
        cursor
        node {
          id
          title
          quantityAvailable
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;

/**
 *
 * @param variables.productId product's id
 * @example getProductRecommendations({productId: "gid://shopify/Product/8323316973870"})
 * @returns
 */
export const getProductRecommendations = async (variables: { productId: string }) => {
  const response = await shopifyTmpApi({ query, variables }, { revalidate: 10 });
  return response;
};
