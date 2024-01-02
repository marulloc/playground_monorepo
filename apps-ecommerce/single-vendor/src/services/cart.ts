import {
  Cart,
  CartCreatePayload,
  CartInput,
  CartLine,
  CartLineInput,
  CartLineUpdateInput,
  CartLinesAddPayload,
  CartLinesRemovePayload,
  CartLinesUpdatePayload,
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

  /**
   *
   * @param variables.lines.id Product Variant의 id
   * @returns
   */
  addCartLines: async (variables: { cartId: Cart['id']; lines: CartLineInput[] }) => {
    const { cartLinesAdd } = await storefrontApi<CartLinesAddPayload>(
      { query: cartMutation.addCartLines, variables },
      { revalidate: 0 },
    );

    return cartLinesAdd;
  },

  /**
   *
   * @param variables. Cart Line의 id
   * @returns
   */
  updateCartLines: async (variables: { cartId: Cart['id']; lines: CartLineUpdateInput[] }) => {
    const { cartLinesUpdate } = await storefrontApi<CartLinesUpdatePayload>(
      { query: cartMutation.updateCartLines, variables },
      { revalidate: 0 },
    );

    return cartLinesUpdate;
  },

  /**
   *
   * @param variables.lineIds Cart Line의 id
   * @returns
   */
  removeCartLines: async (variables: { cartId: Cart['id']; lineIds: CartLine['id'][] }) => {
    const { cartLinesRemove } = await storefrontApi<CartLinesRemovePayload>(
      { query: cartMutation.removeCartLines, variables },
      { revalidate: 0 },
    );

    return cartLinesRemove;
  },
};
