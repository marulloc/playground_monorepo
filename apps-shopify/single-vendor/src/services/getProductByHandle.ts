import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
query getProductByHandle($handle: String!) {
  product(handle:  $handle) {
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
 * @param variables.handle product's handle
 * @example getProductByHandle({handle: "the-collection-snowboard-hydrogen"})
 * @returns
 */
export const getProductByHandle = async (variables: { handle: string }) => {
  const response = await shopifyTmpApi({ query, variables }, { revalidate: 10 });
  return response;
};
