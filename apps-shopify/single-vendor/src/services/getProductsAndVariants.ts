import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
query getProductsAndVariants {
  products(first: 3) {
    edges {
      cursor
      node {
        id
        title
        description
        handle
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
  }
}
`;

export const getProductsAndVariants = async () => {
  const response = await shopifyTmpApi({ query }, { revalidate: 10 });
  return response;
};
