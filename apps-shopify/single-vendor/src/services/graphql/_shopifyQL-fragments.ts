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
};
