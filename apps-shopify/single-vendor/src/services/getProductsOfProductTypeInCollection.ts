import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
query getProductsOfProductTypeInCollection($handle: String!, $value: String!) {
  collection(handle: $handle) {
    handle
    products(first: 10, filters: {productType: $value}) {
      edges {
        node {
          handle
          productType
        }
      }
    }
  }
}
`;

/**
 *
 * @param variables.handle collection's handle
 * @param varaibles.value producty type name
 * @example getProductsOfProductTypeInCollection({"handle": "automated-collection","value": "snowboard"})
 * @returns string
 */
export const getProductsOfProductTypeInCollection = async (variables: { handle: string; value: string }) => {
  const response = await shopifyTmpApi({ query, variables }, { revalidate: 10 });
  return response;
};
