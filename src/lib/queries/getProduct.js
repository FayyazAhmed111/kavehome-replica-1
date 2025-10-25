import { gql } from "graphql-request";

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProduct($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      name
      slug
      sku
      description
      shortDescription
      ... on SimpleProduct {
        price
        regularPrice
        salePrice
        stockQuantity
        stockStatus
        image {
          sourceUrl
        }
        galleryImages {
          nodes {
            sourceUrl
          }
        }
        packageFields { label value }
        descriptionFields { label value }
        dimensionsFields { label value }
        featuresFields { label value }
        materialsFields { label value }
        unpackingFields { label value }
        careFields { label value }
        packagingFields { label value }
      }
    }
  }
`;
