import { Cart, CartCreatePayload, CartInput } from '@shopify/hydrogen-react/storefront-api-types';
import { storefrontApi } from './api/shopify-api';
import { cartMutation, cartQuery } from './graphql/cart';

export const cartQL = {
  createCart: async (variables: { cartInput: CartInput }) => {
    const { cartCreate } = await storefrontApi<CartCreatePayload>(
      { query: cartMutation.createCart, variables },
      { revalidate: 0 },
    );

    return cartCreate;
  },
};
