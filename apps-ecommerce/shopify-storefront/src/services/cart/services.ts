import { storeFetch } from '@/shopify-gql';
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from '@/shopify-gql/mutations/cart';
import { getCartQuery } from '@/shopify-gql/queries/cart';

export async function createCart(): Promise<Cart> {
  const res = await storeFetch<CreateCartService>({
    query: createCartMutation,
    cache: 'no-store',
  });

  res.body.data.cartCreate.cart;

  // return reshapeCart(res.body.data.cartCreate.cart);
}

export async function addToCart(cartId: string, lines: { merchandiseId: string; quantity: number }[]): Promise<Cart> {
  const res = await storeFetch<AddToCartService>({
    query: addToCartMutation,
    variables: { cartId, lines },
    cache: 'no-store',
  });

  // return reshapeCart(res.body.data.cartLinesAdd.cart);
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
  const res = await storeFetch<RemoveFromCartService>({
    query: removeFromCartMutation,
    variables: { cartId, lineIds },
    cache: 'no-store',
  });

  // return reshapeCart(res.body.data.cartLinesRemove.cart);
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[],
): Promise<Cart> {
  const res = await storeFetch<UpdateCartService>({
    query: editCartItemsMutation,
    variables: { cartId, lines },
    cache: 'no-store',
  });

  // return reshapeCart(res.body.data.cartLinesUpdate.cart);
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
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

  // return reshapeCart(res.body.data.cart);
}
