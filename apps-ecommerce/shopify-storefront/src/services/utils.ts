import { extractGid } from '@/shopify-gql/utils';

export const generateRouteFromGID = (gid: ShopifyGid['hash']) => {
  const { resource, id } = extractGid(gid);
  return `/${resource.toLowerCase()}/${id.toLowerCase()}`;
};
