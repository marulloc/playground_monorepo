import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
// 나중에 .env에 작성

const STORE = 'headless-maker';
const VERSION = '2023-10';

export const API_CONFIG = {
  STORE: 'headless-maker',
  VERSION: '2023-10',
  END_POINT: `https://${STORE}.myshopify.com/api/${VERSION}/graphql.json`,
  'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_STORE_FRONT_PUBLIC as string,
};

type GQLParmas = { query: string | DocumentNode; variables?: { [key: string]: any } };

export const shopifyTmpApi = async (params: GQLParmas, next?: NextFetchRequestConfig) => {
  const response = await (
    await fetch(API_CONFIG.END_POINT, {
      method: 'POST',
      headers: {
        'X-Shopify-Storefront-Access-Token': API_CONFIG['X-Shopify-Storefront-Access-Token'],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: params.query, variables: params.variables }),
      next: next,
    })
  ).json();

  return response;
};

export const mytmpgql = (literals: string | readonly string[], ...args: any[]) =>
  gql(literals, ...args)?.loc?.source.body as string;
