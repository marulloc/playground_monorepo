import test from './getShop.gql';
import { loc } from './getShop.gql';

export const getShopLegacy = async () => {
  const store = 'headless-maker';
  const version = '2023-10';
  const url = `https://${store}.myshopify.com/api/${version}/graphql.json`;

  const response = await (
    await fetch(url, {
      method: 'POST',
      headers: {
        'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_STORE_FRONT_PUBLIC as string,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: test.loc.source.body,
      }),
      next: { revalidate: 10 },
    })
  ).json();

  return response;
};
