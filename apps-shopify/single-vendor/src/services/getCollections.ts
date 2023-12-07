import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
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
`;

export const getCollections = async () => {
  const response = await shopifyTmpApi({ query }, { revalidate: 10 });
  return response;
};
