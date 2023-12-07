import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
query getCollectionByHandle($handle: String!) {
  collection(handle: $handle) {
    id
    title
    description
  }
}
`;

/**
 *
 * @param variables.handle collection's handle
 * @example getCollectionByHandle({handle: "automated-collection"})
 * @returns
 */
export const getCollectionByHandle = async (variables: { handle: string }) => {
  const response = await shopifyTmpApi({ query, variables }, { revalidate: 10 });
  return response;
};
