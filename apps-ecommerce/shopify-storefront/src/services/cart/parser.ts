import { flatConnection } from '@/shopify-gql/utils';

export const parseCart = (cart: ShopifyCart): Cart => {
  return { ...cart, lines: flatConnection(cart.lines) };
};
