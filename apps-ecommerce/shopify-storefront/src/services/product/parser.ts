import { flatConnection } from '@/shopify-gql/utils';
import { generateRouteFromGID } from '../utils';

export const parseProduct = (product: ShopifyProduct): Product => {
  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: flatConnection(images),
    variants: flatConnection(variants),
    routePath: generateRouteFromGID(rest.id),
  };
};

export const parseProducts = (products: ShopifyProduct[]): Product[] => {
  return products.map((product) => parseProduct(product));
};
