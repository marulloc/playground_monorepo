import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
query getProductByHandle($handle: String!, $selectedOption : [SelectedOptionInput!]!) {
  product(handle:  $handle) {
    variantBySelectedOptions(selectedOptions: $selectedOption ) {
      title
      id
      sku
      unitPrice {
        amount
        currencyCode
      }
      image {
        url
        id
        width
        height
        altText
      }
      
      quantityAvailable
      price {
        amount
        currencyCode
      }
    }
  }
}
`;

/**
 *
 * @param variables.handle product's handle
 * @param variables.selectedOption user selected option
 * @example
 * @returns
 */

export const getProductVariantBySelectedOption = async (variables: {
  handle: string;
  selectedOption: { name: string; value: string }[];
}) => {
  const response = await shopifyTmpApi({ query, variables }, { revalidate: 10 });
  return response;
};
