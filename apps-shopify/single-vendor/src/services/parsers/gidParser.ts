import { ShopifyGid } from '@shopify/hydrogen-react/analytics-types';

export const gidParser = {
  /**
   *
   * @param gid ShopifyGid
   * @returns
   */
  extract: (gid: ShopifyGid['hash']) => {
    const regexParttern = /gid:\/\/shopify\/([^\/]+)\/(\d+)/;

    const match = gid.match(regexParttern);
    if (match) {
      const [_, resource, id] = match;
      return { resource, id };
    } else {
      return null;
    }
  },

  /**
   *
   * @param id Shopify Object ID
   * @param resource Camel case string
   */
  comibne: (id: ShopifyGid['id'], resource: ShopifyGid['resource']) => {
    const gid = `gid://shopify/${resource}/${id}`;
    return gid;
  },
};
