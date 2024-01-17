/**
 * @description lines: BaseLineConnection.flatMap
 */
type Cart = Omit<ShopifyCart, 'lines'> & {
  lines: ShopifyBaseCartLine[];
};

type CreateCartService = {
  data: { cartCreate: { cart: ShopifyCart } };
};

type GetCartService = {
  data: { cart: ShopifyCart };
  variables: { cartId: string };
};

type AddToCartService = {
  data: { cartLinesAdd: { cart: ShopifyCart } };
  variables: {
    cartId: string;
    lines: { merchandiseId: string; quantity: number }[];
  };
};

type RemoveFromCartService = {
  data: { cartLinesRemove: { cart: ShopifyCart } };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

type UpdateCartService = {
  data: { cartLinesUpdate: { cart: ShopifyCart } };
  variables: {
    cartId: string;
    lines: { id: string; merchandiseId?: string; quantity: number }[];
  };
};
