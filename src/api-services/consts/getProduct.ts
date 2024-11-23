export const GET_PRODUCT_OF_PRODUCT = `
  query GetProductDetail($slug: String!) {
  product(slug: $slug) {
    id
    name
    description
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
    variants {
      id
      name
      sku
      stockLevel
      currencyCode
      price
      priceWithTax
      featuredAsset {
        id
        preview
      }
      assets {
        id
        preview
      }
    }
  }
}
`;
