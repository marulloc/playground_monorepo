import { ShopifyQLFragment } from './_shopifyQL-fragments';

export const cartQuery = {};

export const cartMutation = {
  createCart: `
    mutation createCart($cartInput: CartInput) {
      cartCreate(input: $cartInput) {
        cart {
          ...cartContents
        }
      }
    }
    ${ShopifyQLFragment.cartContents}    
  `,
};
