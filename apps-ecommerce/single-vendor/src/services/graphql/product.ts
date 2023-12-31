import { ShopifyQLFragment } from './_shopifyQL-fragments';

export const productQuery = {
  getProductById: `
    query getProductById($id: ID!) {
      product(id: $id) {
        id
        title
        handle 
        descriptionHtml
    
        images(first:5){
          nodes {
            altText
            height
            width
            id
            url
          }
        }
        featuredImage {
          url
          altText
          width
          height
        }
        options(first:30){
          id
          name
          values
        }
      }
    }
  `,

  getVariantByOptions: `
    query getProductByHandle($id: ID!, $selectedOptions : [SelectedOptionInput!]!) {
      product(id: $id) {
        variantBySelectedOptions(selectedOptions: $selectedOptions ) {
          title
          id
          sku
          unitPrice {
            amount
            currencyCode
          }
          image {
            url
            id
            width
            height
            altText
          }
          quantityAvailable
          price {
            amount
            currencyCode
          }
        }
      }
    }
  `,

  getProductRecommendations: `
    query getProductRecommendations($productId: ID!, $intent:ProductRecommendationIntent) {
      productRecommendations(productId: $productId, intent: $intent) {
        ...productCard
      }
    }
    ${ShopifyQLFragment.productCard}
  `,
} as const;

export const productMutation = {};
