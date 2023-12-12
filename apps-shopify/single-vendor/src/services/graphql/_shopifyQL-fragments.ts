export const ShopifyQLFragment = {
  /**
   * @description ProductCard를 만들기 위한 데이터
   * @usecase product list, recommendations ...
   */
  productCard: `
    fragment productCard on Product { 
      id
      title
      handle
      vendor
      productType
      availableForSale

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
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    }
  `,

  /**
   * @description cart 내용물
   */
  cartContents: `
    fragment cartContents on Cart {
      id
      createdAt
      updatedAt
      checkoutUrl
      buyerIdentity {
        customer {
          email
        }
        countryCode
        walletPreferences
      }
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            cost {
              amountPerQuantity {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
            }
            merchandise {
              ... on ProductVariant {
                product {
                  title
                }
                title
                image {
                  url
                  width
                  height
                  altText
                }
              }
            }
          }
        }
      }
      attributes {
        key
        value
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
    }
  `,
};
