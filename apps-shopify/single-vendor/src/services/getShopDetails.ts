import { mytmpgql, shopifyTmpApi } from './graphql/common';

const query = mytmpgql`
query getShopDetails {
  shop {
    name
    primaryDomain {
      host
      url
    }
    paymentSettings {
      currencyCode
      acceptedCardBrands
      enabledPresentmentCurrencies
    }
  }
}
`;

export const getShopDetail = async () => {
  const response = await shopifyTmpApi({ query }, { revalidate: 10 });
  return response;
};
