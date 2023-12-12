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

  addCartLines: `
    mutation addCartLines($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ...cartContents
        }
        
        userErrors {
          field
          message
        }
      }
    }
    ${ShopifyQLFragment.cartContents}    
  `,
};
