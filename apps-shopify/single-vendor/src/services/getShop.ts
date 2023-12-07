import gql from 'graphql-tag';
import test from './getShop.gql';
import { loc } from './getShop.gql';
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

export const getShop = async () => {
  const response = await shopifyTmpApi({ query }, { revalidate: 10 });
  return response;
};
