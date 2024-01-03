import { storeFetch } from '@/shopify-gql';
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from '@/shopify-gql/mutations/cart';
import { getCartQuery } from '@/shopify-gql/queries/cart';
import { flatConnection } from '@/shopify-gql/utils';

/**
 *
 * @returns
 */
export const createCart = async (): Promise<Cart> => {
  const res = await storeFetch<CreateCartService>({
    query: createCartMutation,
    cache: 'no-store',
  });

  return {
    ...res.body.data.cartCreate.cart,
    lines: flatConnection(res.body.data.cartCreate.cart.lines),
  };
};

/**
 *
 * @param cartId
 * @param lines
 * @returns
 */
export const addToCart = async (
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[],
): Promise<Cart> => {
  const res = await storeFetch<AddToCartService>({
    query: addToCartMutation,
    variables: { cartId, lines },
    cache: 'no-store',
  });

  return {
    ...res.body.data.cartLinesAdd.cart,
    lines: flatConnection(res.body.data.cartLinesAdd.cart.lines),
  };
};

/**
 *
 * @param cartId
 * @param lineIds
 * @returns
 */
export const removeFromCart = async (cartId: string, lineIds: string[]): Promise<Cart> => {
  const res = await storeFetch<RemoveFromCartService>({
    query: removeFromCartMutation,
    variables: { cartId, lineIds },
    cache: 'no-store',
  });

  return {
    ...res.body.data.cartLinesRemove.cart,
    lines: flatConnection(res.body.data.cartLinesRemove.cart.lines),
  };
};

/**
 *
 * @param cartId
 * @param lines
 * @returns
 */
export const updateCart = async (
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[],
): Promise<Cart> => {
  const res = await storeFetch<UpdateCartService>({
    query: editCartItemsMutation,
    variables: { cartId, lines },
    cache: 'no-store',
  });

  return {
    ...res.body.data.cartLinesUpdate.cart,
    lines: flatConnection(res.body.data.cartLinesUpdate.cart.lines),
  };
};

/**
 *
 * @param cartId
 * @returns
 */
export const getCart = async (cartId: string): Promise<Cart | undefined> => {
  const res = await storeFetch<GetCartService>({
    query: getCartQuery,
    variables: { cartId },
    // tags: [TAGS.cart],
    cache: 'no-store',
  });

  // Old carts becomes `null` when you checkout.
  if (!res.body.data.cart) {
    return undefined;
  }

  return {
    ...res.body.data.cart,
    lines: flatConnection(res.body.data.cart.lines),
  };
};
