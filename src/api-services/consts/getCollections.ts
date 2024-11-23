export const GET_PRODUCT_COLLECTIONS = `
query GetCollections {
  collections {
    items {
      id
      name
      slug
      parent {
        name
      }
      featuredAsset {
        id
        preview
      }
    }
    totalItems
  }
}
`;