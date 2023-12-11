import { DoublePropsErrorMessage } from '@shopify/hydrogen-react/ShopPayButton';
import { DocumentNode } from 'graphql';

type StorefrontAPIParams = { query: string | DocumentNode; variables?: { [key: string]: any } };

/**
 *
 * @param params - {query: string | DocumentNode; variables?: { [key: string]: any }
 * @param next - next fetch API's next parameters
 * @returns
 */
export const storefrontApi = async <T>(
  params: StorefrontAPIParams,
  next?: NextFetchRequestConfig,
): Promise<{ [key: string]: T }> => {
  const url = `https://${process.env.API_STORE}.myshopify.com/api/${process.env.API_VERSION}/graphql.json`;
  const token = process.env.API_PUBLIC as string;

  const method = 'POST';
  const headers = { 'X-Shopify-Storefront-Access-Token': token, 'Content-Type': 'application/json' };
  const body = JSON.stringify({ query: params.query, variables: params.variables });

  const { data, errors, extensions } = await (await fetch(url, { method, headers, body, next })).json();

  if (errors) throw new Error(errors[0].message);

  return data;
};
