import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
query getProductTagAndType {
  productTags(first:10) {
    edges{
      node
    }
  }
  productTypes(first: 10) {
    edges{
      node
    }
  }
}
`;

export const getProductTagAndType = async () => {
  const response = await shopifyTmpApi({ query }, { revalidate: 10 });
  return response;
};
