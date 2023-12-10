import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
query getProductByHandle($handle: String!) {
  product(handle:  $handle) {
    id
    title
    description
    descriptionHtml
    images(first:5){
      nodes {
        altText
        height
        width
        id
        url
      }
    }
    featuredImage {
      url
      altText
      width
      height
    }
    options(first:30){
      id
      name
      values
    }

    variants(first: 20) {
      edges {
        cursor
        node {
          id
          title
          selectedOptions {
            name
            value
          }
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
