import {
  Cart,
  CartCreatePayload,
  CartInput,
  CartLineInput,
  CartLinesAddPayload,
} from '@shopify/hydrogen-react/storefront-api-types';
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

  addCartLines: async (variables: { cartId: Cart['id']; lines: CartLineInput[] }) => {
    const { cartLinesAdd } = await storefrontApi<CartLinesAddPayload>(
      { query: cartMutation.addCartLines, variables },
      { revalidate: 0 },
    );

    return cartLinesAdd;
  },
};
